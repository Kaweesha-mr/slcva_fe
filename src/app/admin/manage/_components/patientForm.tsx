import { Button, Input } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { RadioGroup, Radio } from '@nextui-org/react';

const PatientForm = () => {
  const fileSchema = z
    .union([z.instanceof(File), z.null()]) // Allow both File or null
    .refine((file) => file === null || file.size <= 1 * 1024 * 1024, {
      // Max file size is 1MB, only apply size check if file is not null
      message: 'File must be less than 1MB',
    })
    .refine(
      (file) =>
        file === null ||
        ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type),
      {
        // Allowed file types, only apply type check if file is not null
        message: 'Only JPG, PNG, or PDF files are allowed',
      },
    );

  type Patient = {
    fullName: string;
    nic: string;
    dob: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    rearSideNIC: File | null;
    frontSideNIC: File | null;
    medicalDocuments: File | null;
  };

  type Importer = {
    fullName: string;
    nic: string;
    dob: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    website: string;
    licenceNumber: string;
    importerDocs: File | null;
  };

  type Donor = {
    fullName: string;
    nic: string;
    dob: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    address: string;
  };

  type UserType = Patient | Importer | Donor;

  const defaultFormData = {
    patient: {
      fullName: '',
      nic: '',
      dob: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      rearSideNIC: null,
      frontSideNIC: null,
      medicalDocuments: null,
    } as Patient,
    importer: {
      fullName: '',
      nic: '',
      dob: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      website: '',
      licenceNumber: '',
      importerDocs: null,
    } as Importer,
    donor: {
      fullName: '',
      nic: '',
      dob: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address: '',
    } as Donor,
  };

  const baseSchema = z.object({
    fullName: z.string().min(5).max(255),
    nic: z.string({ message: 'NIC must be 10 digits' }),
    dob: z.string(),
    email: z.string().email(),
    phone: z
      .string({ message: 'Phone number must have 10 digits' })
      .regex(/^[0-9]{10}$/, { message: 'Phone number must be 10 digits' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string(),
  });

  const patientSchema = baseSchema
    .extend({
      rearSideNIC: fileSchema,
      frontSideNIC: fileSchema,
      medicalDocuments: fileSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const importerSchema = baseSchema
    .extend({
      website: z.string().url({ message: 'Website must be a valid URL' }),
      importerDocs: fileSchema,
      licenceNumber: z
        .string()
        .min(5, { message: 'Licence number must be at least 5 characters' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const donorSchema = baseSchema
    .extend({
      address: z
        .string()
        .min(10, { message: 'Address must be at least 10 characters' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState('patient');
  const [formData, setFormData] = useState<UserType>(defaultFormData[selected]);

  useEffect(() => {
    setFormData(defaultFormData[selected]);
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0] || null, // Default to null if no file selected
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const isValid = handleValidation(formData);
  
    if (isValid) {
      switch (selected) {
        case 'patient':
          console.log('Submitting Patient data to API:', formData);
          // Simulate API call for patient
          break;
  
        case 'importer':
          console.log('Submitting Importer data to API:', formData);
          // Simulate API call for importer
          break;
  
        case 'donor':
          console.log('Submitting Donor data to API:', formData);
          // Simulate API call for donor
          break;
  
        default:
          console.error('Unknown user type selected');
      }
    } else {
      console.log('Form has errors', errors);
    }
  };
  

  const handleValidation = () => {
    const schemaMap = {
      patient: patientSchema,
      importer: importerSchema,
      donor: donorSchema,
    };

    const selectedSchema = schemaMap[selected];
    const result = selectedSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors); // Directly use fieldErrors for better flexibility
      return false;
    } else {
      setErrors({});
      return true;
    }
  };

  const handleClear = () => {
    setFormData(defaultFormData[selected]);
  };

  return (
    <div>
      <RadioGroup
        label="Select User Type"
        value={selected}
        onValueChange={setSelected}
        orientation="horizontal"
        color="default"
        className="m-5"
      >
        <Radio value="patient">Patient</Radio>
        <Radio value="donor">Donor</Radio>
        <Radio value="importer">Importer</Radio>
      </RadioGroup>

      <form className="max-w-[600px] space-y-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
            errorMessage={errors.fullName}
            placeholder="Full Name"
            autoFocus
          />
          <Input
            label="NIC"
            value={formData.nic}
            isInvalid={!!errors.nic}
            errorMessage={errors.nic}
            onChange={handleChange}
            name="nic"
            placeholder="NIC"
          />

          {selected === 'patient' && (
            <>
              <Tooltip
                placement="bottom"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Rear Side NIC</div>
                    <div className="text-tiny text-slate-500 mt-1">
                      Documents should prove the situation. <br /> Only image
                      formats and PDFs are allowed. <br />
                      <span className="text-red-600">
                        Files must be less than 1 MB in size.
                      </span>
                    </div>
                  </div>
                }
              >
                <Input
                  id="rearSideNIC"
                  type="file"
                  isInvalid={!!errors.rearSideNIC}
                  errorMessage={errors.rearSideNIC}
                  onChange={handleFileChange}
                  name="rearSideNIC"
                />
              </Tooltip>

              <Tooltip
                placement="bottom"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">Front Side NIC</div>
                    <div className="text-tiny text-slate-500 mt-1">
                      Documents should prove the situation. <br /> Only image
                      formats and PDFs are allowed. <br />
                      <span className="text-red-600">
                        Files must be less than 1 MB in size.
                      </span>
                    </div>
                  </div>
                }
              >
                <Input
                  id="frontSideNIC"
                  type="file"
                  isInvalid={!!errors.frontSideNIC}
                  errorMessage={errors.frontSideNIC}
                  name="frontSideNIC"
                  onChange={handleFileChange}
                />
              </Tooltip>
            </>
          )}

          {selected === 'importer' && (
            <>
              <Input
                label="Website"
                value={formData.companyName}
                onChange={handleChange}
                isInvalid={!!errors.website}
                errorMessage={errors.website}
                name="website"
                placeholder="abs.com"
              />
              <Input
                label="Licence Number"
                value={formData.licenceNumber}
                onChange={handleChange}
                name="licenceNumber"
                placeholder="Licence Number"
              />
            </>
          )}

          <Input
            label="DOB"
            value={formData.dob}
            onChange={handleChange}
            name="dob"
            placeholder="DOB"
            type="date"
            isInvalid={!!errors.dob}
            errorMessage={errors.dob}
            max={new Date().toISOString().split('T')[0]}
          />
          <Input
            label="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="example@gmail.com"
            type="email"
            isInvalid={!!errors.email}
            errorMessage={errors.email}
          />
          <Input
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            placeholder="+94 123 456 678"
            type="phone"
            isInvalid={!!errors.phone}
            errorMessage={errors.phone}
          />

          {selected === 'patient' && (
            <>
              <Tooltip
                placement="bottom"
                content={
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">
                      Upload Medical Documents
                    </div>
                    <div className="text-tiny text-slate-500 mt-1">
                      Documents should prove the situation. <br /> Only image
                      formats and PDFs are allowed. <br />
                      <span className="text-red-600">
                        Files must be less than 1 MB in size.
                      </span>
                    </div>
                  </div>
                }
              >
                <Input
                  id="medicalDocuments"
                  type="file"
                  onChange={handleFileChange}
                  name="medicalDocuments"
                  isInvalid={!!errors.medicalDocuments}
                  errorMessage={errors.medicalDocuments}
                />
              </Tooltip>
            </>
          )}

          {selected === 'importer' && (
            <Tooltip
              placement="bottom"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Upload Verification Documents
                  </div>
                  <div className="text-tiny text-slate-500 mt-1">
                    Documents should prove the situation. <br /> Only image
                    formats and PDFs are allowed. <br />
                    <span className="text-red-600">
                      Files must be less than 1 MB in size.
                    </span>
                  </div>
                </div>
              }
            >
              <Input
                id="importerDocs"
                name="importerDocs"
                type="file"
                onChange={handleFileChange}
                name="medicalDocuments"
                isInvalid={!!errors.medicalDocuments}
                errorMessage={errors.medicalDocuments}
              />
            </Tooltip>
          )}

          {selected === 'donor' && (
            <>
              <Input
                label="Address"
                value={formData.address}
                onChange={handleChange}
                name="address"
                placeholder="Address"
              />
            </>
          )}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Input
            label="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Password"
            type="password"
            isInvalid={!!errors.password}
            errorMessage={errors.password}
          />
          <Input
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword}
          />
          <div className="flex gap-5">
            <Button
              size="md"
              className="text-center"
              type="submit"
              onClick={handleSubmit}
              variant="shadow"
            >
              Submit
            </Button>
            <Button
              size="md"
              className="text-center"
              type="button"
              onClick={handleClear}
              color="danger"
              variant="shadow"
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;

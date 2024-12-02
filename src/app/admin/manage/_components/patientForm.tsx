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

    const patientScheema = z
    .object({
      fullName: z.string().min(5).max(255),
      nic: z.string({ message: 'NIC must be 10 digits' }),
      dob: z.string(),
      email: z.string().email(),
      phone: z
        .string({ message: 'phone number must have 10 digits' })
        .regex(/^[0-9]{10}$/, { message: 'Phone number must be 10 digits' }),
      password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Password must contain letters' })
        .regex(/[0-9]/, { message: 'Password must contain numbers' }),
      confirmPassword: z.string(),
      rearSideNIC: fileSchema,
      frontSideNIC: fileSchema,
      medicalDocuments: fileSchema,
      website: z
        .string()
        .min(5, { message: 'Website must be at least 5 characters long' })
        .url({ message: 'Website must be a valid URL' })
        .optional(), // Only required for 'importer'
      licenceNumber: z
        .string()
        .min(5, { message: 'Licence number must be at least 5 characters long' })
        .optional(), // Only required for 'importer'
      address: z
        .string()
        .min(10, { message: 'Address must be at least 10 characters long' })
        .optional(), // Only required for 'donor'
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });
  

  type Patient = z.infer<typeof patientScheema>;

  const [formData, setFormData] = useState<Patient>({
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
  });
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState('patient');

  useEffect(() => {
    if (selected === 'patient') {
      setFormData((prevState) => ({
        ...prevState,
        website: '',
        licenceNumber: '',
        address: '',
      }));
    } else if (selected === 'importer') {
      setFormData((prevState) => ({
        ...prevState,
        address: '',
      }));
    } else if (selected === 'donor') {
      setFormData((prevState) => ({
        ...prevState,
        website: '',
        licenceNumber: '',
      }));
    }
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
      [name]: files[0], // Store the file in state
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation(formData)) {
      console.log('Form Submitted', formData);
    } else {
      console.log('Form has errors', errors);
    }
  };

  const handleValidation = (patient: Patient) => {
    const result = patientScheema.safeParse(patient);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        nic: fieldErrors.nic?.[0],
        dob: fieldErrors.dob?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
        rearSideNIC: fieldErrors.rearSideNIC?.[0],
        frontSideNIC: fieldErrors.frontSideNIC?.[0],
        medicalDocuments: fieldErrors.medicalDocuments?.[0],
        website: fieldErrors.website?.[0],
        licenceNumber: fieldErrors.licenceNumber?.[0],
        address: fieldErrors.address?.[0],
      });
    } else {
      setErrors({});
      return true;
    }
  };
  

  const handleClear = () => {
    setFormData({
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
    });
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
                  name = 'frontSideNIC'
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
                name = 'importerDocs'
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

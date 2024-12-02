import { Patient,Importer,Donor } from '@/types';
import exp from 'constants';
import { z } from 'zod';

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



    export { defaultFormData, patientSchema, importerSchema, donorSchema };
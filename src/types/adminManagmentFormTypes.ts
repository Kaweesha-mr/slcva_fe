import exp from "constants";

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


  export type { Patient, Importer, Donor };
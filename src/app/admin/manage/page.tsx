'use client';
import { Button } from '@nextui-org/react';
import React from 'react';
import PatientForm from './_components/patientForm';

const Manage = () => {
  return (
    <div className="space-y-10 ">
      <div className="flex justify-evenly">
        <span className="text-4xl">Create New Account </span>
        <Button>Registration Requests</Button>
      </div>


      <PatientForm />
    </div>
  );
};

export default Manage;

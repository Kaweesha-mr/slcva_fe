'use client';
import { Button } from '@nextui-org/react';
import React from 'react';
import { RadioGroup, Radio } from '@nextui-org/react';
import PatientForm from './_components/patientForm';

const Manage = () => {
  const [selected, setSelected] = React.useState('london');
  return (
    <div className="space-y-10">
      <div className="flex justify-evenly">
        <span className="text-4xl">Create New Account </span>
        <Button>Registration Requests</Button>
      </div>

      <RadioGroup
        label="Select User Type"
        value={selected}
        onValueChange={setSelected}
        orientation="horizontal"
        color="default"
      >
        <Radio value="patient">Patient</Radio>
        <Radio value="donor">Donor</Radio>
        <Radio value="importer">Importer</Radio>
      </RadioGroup>

      <PatientForm />
    </div>
  );
};

export default Manage;

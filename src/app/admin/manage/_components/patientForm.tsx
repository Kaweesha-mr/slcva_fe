import { Input } from '@nextui-org/input';
const PatientForm = () => {
  return (
    <div>
      <form className="max-w-[1/3] space-y-3">
        <Input label="Full Name" placeholder="Full Name" autoFocus />
        <Input label="NIC" placeholder="Full Name" />

        <div className="flex  justify-center"></div>

        <Input label="DOB" placeholder="DOB" type="date" />
        <Input label="Email" placeholder="example@gmail.com" type="email" />
        <Input
          label="Phone Number"
          placeholder="+94 123 456 678"
          type="phone"
        />
        <Input
          label="Explain why you need this service"
          placeholder="Explain why you need this service"
          type="text"
        />
        <Input label="Password" placeholder="Password" type="password" />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
        />
      </form>
    </div>
  );
};

export default PatientForm;

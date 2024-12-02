import { Button, Input } from '@nextui-org/react';
import { Tooltip } from '@nextui-org/react';

const PatientForm = () => {
  return (
    <div>
      <form className="max-w-[600px] space-y-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Input label="Full Name" placeholder="Full Name" autoFocus />
          <Input label="NIC" placeholder="Full Name" />
          <Input label="DOB" placeholder="DOB" type="date" />
          <Input label="Email" placeholder="example@gmail.com" type="email" />
          <Input
            label="Phone Number"
            placeholder="+94 123 456 678"
            type="phone"
          />
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
            <Input id="picture" type="file" />
          </Tooltip>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
          />
          <div className="flex gap-5">
            <Button
              size="md"
              className="text-center"
              type="submit"
              variant="shadow"
            >
              {' '}
              Submit{' '}
            </Button>
            <Button
              size="md"
              className="text-center"
              type="submit"
              color="danger"
              variant="shadow"
            >
              {' '}
              Clear{' '}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;

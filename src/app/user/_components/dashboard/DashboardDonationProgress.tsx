'use client';

import { Progress } from '@nextui-org/react';
import { Button } from '@nextui-org/button';
import { donationProgress } from '@/app/user/_types/dashboardTypes';
import { useState } from 'react';

type DashboardDonationProgressProps = { donations: donationProgress[] | [] };

const DashboardDonationProgress = ({
  donations,
}: DashboardDonationProgressProps) => {
  // state used for toggling the number of donations to display
  const [iscollapsed, setIscollapsed] = useState(false);

  if (!donations || donations.length === 0)
    return <div className="text-center">No donations available</div>;
  // Determine how much donations to display(4 or all) based on iscollapsed state
  const displayedDonations = iscollapsed ? donations : donations.slice(0, 4);
  return (
    <>
      {displayedDonations.map((donation) => {
        return (
          <div className="grid gap-y-4 border-l-4" key={donation.id}>
            <div className="grid grid-flow-row lg:max-w-4xl lg:mx-10 gap-y-2">
              <Progress
                label={donation.name ? donation.name : 'Donation Progress'}
                size="lg"
                radius="sm"
                value={donation.percentage | 0}
                valueLabel={`${donation.daysLeft} days left . ${donation.percentage}%`}
                maxValue={100}
                color="primary"
                showValueLabel={true}
              />
              <div className="flex justify-end gap-4">
                {donation.percentage < 100 && (
                  <Button size="sm" variant="solid" radius="sm" color="success">
                    <span className="lg:text-base">Pay my bill</span>
                  </Button>
                )}
                <Button size="sm" variant="solid" radius="sm" color="secondary">
                  <span className="lg:text-base">Edit bill</span>
                </Button>
                <Button size="sm" variant="solid" radius="sm" color="danger">
                  <span className="lg:text-base">Sponsor request</span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      <Button
        size="md"
        variant="light"
        radius="sm"
        color="primary"
        onClick={() => setIscollapsed((prev) => !prev)}
        className="place-self-center lg:place-self-end lg:mr-10"
      >
        {iscollapsed ? 'Show Less' : 'Show All'}
      </Button>
    </>
  );
};

export default DashboardDonationProgress;

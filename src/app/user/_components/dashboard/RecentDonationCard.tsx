'use client';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { donationHistory } from '../../_types/dashboardTypes';
import { useState } from 'react';

type RecentDonationCardProps = { recentDonations: donationHistory[] | [] };

export const RecentDonationCard = ({
  recentDonations,
}: RecentDonationCardProps) => {
  // state used for toggling the number of recentDonations to display
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (!recentDonations || recentDonations.length === 0)
    return <div className="text-center">No donations available</div>;
  // Determine how much recentDonations to display(2 or all) based on iscollapsed state
  const displayedRecentDonations = isCollapsed
    ? recentDonations.slice(0, 4)
    : recentDonations;
  return (
    <div className="grid">
      {displayedRecentDonations.map((recentDonation) => {
        return (
          <div
            key={recentDonation.id}
            className="p-4 border-2 rounded-md grid grid-cols-5 gap-4 lg:mr-10 my-1 shadow-md shadow-indigo-50 dark:shadow-none border-slate-200"
          >
            {/* doner image section */}
            <section className="col-span-1 lg:pl-6">
              <Image
                src={
                  recentDonation.isAnonymous ||
                  !recentDonation.photo ||
                  recentDonation.photo === ''
                    ? '/images/common/user.png'
                    : recentDonation.photo
                }
                alt="doner"
                width={40}
                height={40}
              />
            </section>
            {/* name, date amount detail section */}
            <section className="col-span-4 grid grid-cols-3 gap-10 items-center ml-4 lg:ml-0">
              <header className="font-semibold ">
                {recentDonation.isAnonymous
                  ? 'Anonymous'
                  : recentDonation.name || ''}
              </header>
              <p className="text-gray-500">{recentDonation.date || ''}</p>
              <p className="font-semibold text-gray-500 ">
                {`Rs.${recentDonation.amount}`}
              </p>
            </section>
            {/* <section className="col-span-1 self-center justify-self-center">
              <Button isIconOnly color="danger" aria-label="Like">
                <svg
                  data-testid="geist-icon"
                  height="24"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="24"
                  color="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Button>
            </section> */}
          </div>
        );
      })}
      {/* toggle button to display more items */}
      {recentDonations.length > 4 && (
        <Button
          size="md"
          variant="light"
          radius="sm"
          color="primary"
          onClick={() => {
            setIsCollapsed((prev) => !prev);
          }}
          className="place-self-center font-bold text-base mt-2 lg:place-self-end lg:mr-10"
        >
          {isCollapsed ? 'Show more' : 'Show less'}
        </Button>
      )}
    </div>
  );
};

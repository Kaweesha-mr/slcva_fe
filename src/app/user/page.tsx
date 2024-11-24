import { Button } from '@nextui-org/button';
import DashboardDonationProgress from './_components/dashboard/DashboardDonationProgress';
import { donationProgress, donationHistory } from './_types/dashboardTypes';
import { RecentDonationCard } from './_components/dashboard/RecentDonationCard';

const donationsProgress: donationProgress[] = [
  { id: '1', name: 'Charity A', percentage: 100, daysLeft: 1 },
  { id: '2', name: 'Charity B', percentage: 50, daysLeft: 20 },
  { id: '3', name: 'Charity C', percentage: 90, daysLeft: 5 },
  { id: '4', name: 'Charity D', percentage: 30, daysLeft: 15 },
  { id: '5', name: 'Charity E', percentage: 60, daysLeft: 25 },
  { id: '6', name: 'Charity F', percentage: 80, daysLeft: 8 },
];

const recentDonations: donationHistory[] = [
  {
    id: '1',
    name: 'Ushan Senarathna',
    date: '2023-01-01',
    amount: 100,
    photo: null,
    isAnonymous: false,
  },
  {
    id: '2',
    name: 'Charity B',
    date: '2023-02-15',
    amount: 200,
    isAnonymous: true,
  },
  {
    id: '3',
    name: 'Charity C',
    date: '2023-03-10',
    amount: 150,
    photo: '',
    isAnonymous: false,
  },
  {
    id: '4',
    name: 'Charity D',
    date: '2023-04-05',
    amount: 250,
    isAnonymous: true,
  },
  {
    id: '5',
    name: 'Charity E',
    date: '2023-05-20',
    amount: 300,
    isAnonymous: false,
  },
  {
    id: '6',
    name: 'Charity F',
    date: '2023-06-15',
    amount: 350,
    isAnonymous: false,
  },
];

const User = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="my-1 text-center font-bold text-3xl">Dashboard</header>
      <section className="w-4/5">
        <article>
          <header className="mb-3 mt-5 text-2xl font-medium">
            Donation Progress
          </header>
          <div className="grid gap-y-4">
            <DashboardDonationProgress donations={donationsProgress} />
          </div>
        </article>
        <article>
          <header className="mb-3 mt-4 text-2xl font-medium">Options</header>
          <div className="flex gap-8 my-6">
            <Button
              variant="ghost"
              size="lg"
              color="secondary"
              radius="sm"
              className="font-semibold"
            >
              Quotation reviews
            </Button>
            <Button
              variant="ghost"
              size="lg"
              color="secondary"
              radius="sm"
              className="font-semibold"
            >
              Bill requests
            </Button>
          </div>
        </article>
        <article>
          <header className="mb-3 mt-4 text-2xl font-medium">
            Recent Donations
          </header>
          <RecentDonationCard recentDonations={recentDonations} />
        </article>
        <article>
          <header className="mb-3 mt-4 text-2xl font-medium">Orders</header>
        </article>
      </section>
    </div>
  );
};

export default User;

import { Button } from '@nextui-org/button';
import DashboardDonationProgress from './_components/dashboard/DashboardDonationProgress';
import { donationProgress } from './_types/dashboardTypes';
import { RecentDonationCard } from './_components/dashboard/RecentDonationCard';
import { OrdersTable } from './_components/dashboard/OrdersTable';
import { sampleOrders, recentDonations } from './sampleData';

const donationsProgress: donationProgress[] = [
  { id: '1', name: 'Charity A', percentage: 100, daysLeft: 1 },
  { id: '2', name: 'Charity B', percentage: 50, daysLeft: 20 },
  { id: '3', name: 'Charity C', percentage: 90, daysLeft: 5 },
  { id: '4', name: 'Charity D', percentage: 30, daysLeft: 15 },
  { id: '5', name: 'Charity E', percentage: 60, daysLeft: 25 },
  { id: '6', name: 'Charity F', percentage: 80, daysLeft: 8 },
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
          <div className="flex gap-8 my-6 mb-10">
            <Button
              size="md"
              color="secondary"
              radius="sm"
              className="text-medium"
            >
              Quotation reviews
            </Button>
            <Button
              size="md"
              color="secondary"
              radius="sm"
              className="text-medium"
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
        <article className="-ml-4 mr-4">
          <header className="mb-3 mt-4 text-2xl font-medium">Orders</header>
          <Button color="secondary" className="mb-4 text-medium">
            Contact admin
          </Button>
          <OrdersTable orders={sampleOrders} />
        </article>
      </section>
    </div>
  );
};

export default User;

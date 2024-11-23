import DashboardCard from '@/app/imp/_components/dashboard';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
    return (
      <>
        <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
          <DashboardCard
            title='Requests'
            count={10}
            icon={<Newspaper className='text-slate-500' size={72} />}
          />
          <DashboardCard
            title='Quotation Sent'
            count={12}
            icon={<Folder className='text-slate-500' size={72} />}
          />
          <DashboardCard
            title='Accepted Quotations'
            count={7}
            icon={<User className='text-slate-500' size={72} />}
          />
          <DashboardCard
            title='Comments'
            count={120}
            icon={<MessageCircle className='text-slate-500' size={72} />}
          />
        </div>

        {/* <AnalyticsChart />
        <PostsTable title='Latest Posts' limit={5} /> */}

      </>

    );
  }
  
 
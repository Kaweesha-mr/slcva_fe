import DashboardDonationProgress from "./_components/DonationProgressCard/DashboardDonationProgress"; 
const User = () => {
    return ( 
        <div>
            <header className="w-full my-1 text-center font-bold text-2xl">Dashboard</header>
            <section className="flex flex-col justify-">
                <article>
                    <header className="mb-3 mt-4 text-xl font-medium">Donation Progress</header>
                    <div className="grid gap-y-4">
                        <DashboardDonationProgress name="donation 1" percentage={100} daysLeft={2}/>
                        <DashboardDonationProgress name="donation 2" percentage={40} daysLeft={1}/>
                        <DashboardDonationProgress name="donation 3" percentage={80} daysLeft={4}/>
                        <DashboardDonationProgress name="donation 4" percentage={10} daysLeft={9}/>
                    </div>
                </article>
                <article>
                    <header>Options</header>
                </article>
                <article><header>Recent Documents</header></article>
                <article><header>Orders</header></article>
            </section>
        </div>
     );
}
 
export default User;
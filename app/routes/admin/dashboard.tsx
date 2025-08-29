import { StatsCard, TripCard } from "components";
import Header from "components/Header";



const Dashboard = () => {

  const { totalUsers, userJoined, totalTrips, tripsCreated, userRole } =
    dashboardStats;
  return (
    <main className="dashboard wrapper">
      {/* Pass the required props here */}
      <Header
        title={`Welcome  ${user.name}  to the Dashboard`}
        description="Here's a summary of your recent activity."
      />
      <section className="flexx flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={userJoined.currentMonth}
            lastMonthCount={userJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users today"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default Dashboard;

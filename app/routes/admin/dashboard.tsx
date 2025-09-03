import { Header, StatsCard, TripCard } from "../../../components";
import { dashboardStats, user, allTrips } from "../../constants";
const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;

const Dashboard = () => {
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
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
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
      <section className="container">
        <h1 className="text-xl font-semibold text-dark-100  ">
          created Trips

        </h1>
        <div className="trip-grid">
          {allTrips.slice(0, 4).map((trip) => (

            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ''}
              tags={[trip.tags![0], trip.travelStyle!]}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
      {/* <TripCard /> */}
    </main>
  );
};

export default Dashboard;

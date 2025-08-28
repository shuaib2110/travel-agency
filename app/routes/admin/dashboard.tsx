import Header from "components/Header"

// It's a convention to name React components with PascalCase (Dashboard)
const Dashboard = () => {
  return (
    <div className="dashboard wrapper">
      {/* Pass the required props here */}
      <Header
        title="Welcome to the Dashboard"
        description="Here's a summary of your recent activity."
      />
    </div>
  )
}

export default Dashboard
function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h2>3</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

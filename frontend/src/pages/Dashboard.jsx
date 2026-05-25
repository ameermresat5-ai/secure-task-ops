function Dashboard() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <span className="eyebrow">SecureTaskOps</span>
          <h1>Modern DevSecOps Task Management</h1>
          <p>
            Manage projects, tasks, containers, CI/CD, and security workflows
            in one clean project platform.
          </p>
        </div>

        <div className="hero-card">
          <h3>System Status</h3>
          <p className="status-dot">● Frontend Running</p>
          <p className="status-dot">● Backend API Ready</p>
          <p className="status-dot">● Security Actions Added</p>
        </div>
      </section>

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

      <section className="info-section">
        <div className="info-card">
          <h3>DevOps</h3>
          <p>Docker, Docker Compose, GitHub Actions, and Pull Requests.</p>
        </div>

        <div className="info-card">
          <h3>Security</h3>
          <p>Bandit, pip-audit, npm audit, secret scan, and Trivy.</p>
        </div>

        <div className="info-card">
          <h3>Full Stack</h3>
          <p>React frontend, Flask backend, and PostgreSQL database.</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

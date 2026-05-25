function Dashboard() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="section-badge">DevSecOps Project</span>
          <h1>Secure Task Management for Modern Teams</h1>
          <p>
            Manage projects, tasks, Docker containers, CI/CD workflows, and
            security scans from one clean full-stack platform.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="primary-link">View Projects</a>
            <a href="/tasks" className="secondary-link">Manage Tasks</a>
          </div>
        </div>

        <div className="system-card">
          <div className="system-card-header">
            <h3>System Overview</h3>
            <span className="live-badge">Live</span>
          </div>

          <div className="system-row">
            <span>Frontend</span>
            <strong>React + Docker</strong>
          </div>

          <div className="system-row">
            <span>Backend</span>
            <strong>Flask API</strong>
          </div>

          <div className="system-row">
            <span>Security</span>
            <strong>GitHub Actions</strong>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <span className="stat-icon">📁</span>
          <h2>3</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <h2>8</h2>
          <p>Total Tasks</p>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🚀</span>
          <h2>4</h2>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <span className="stat-icon">⏳</span>
          <h2>4</h2>
          <p>Pending</p>
        </div>
      </section>

      <section className="feature-grid">
        <div className="feature-card">
          <h3>Full Stack</h3>
          <p>React frontend, Flask backend, and PostgreSQL database.</p>
        </div>

        <div className="feature-card">
          <h3>DevOps</h3>
          <p>Docker, Docker Compose, branches, Pull Requests, and CI.</p>
        </div>

        <div className="feature-card">
          <h3>Security</h3>
          <p>Bandit, pip-audit, npm audit, secret scan, and Trivy.</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

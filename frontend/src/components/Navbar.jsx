import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand-link">
        <div className="brand-logo">S</div>
        <div>
          <h2>SecureTaskOps</h2>
          <span>DevSecOps Platform</span>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="nav-cta">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

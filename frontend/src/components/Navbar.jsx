import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>SecureTaskOps</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

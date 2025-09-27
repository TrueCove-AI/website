import { NavLink, Link } from "react-router-dom";

const NavA = ({ to, children, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `${className} ${isActive ? "active" : ""}`}
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-dot" />
          <span>INFOET</span>
        </Link>

        <nav className="nav">
          <NavA to="/">Home</NavA>
          <NavA to="/services">Our Services</NavA>
          <NavA to="/careers">Careers</NavA>
          <NavA to="/blog">Blog</NavA>
          <NavA to="/about">About</NavA>
          <NavA to="/contact" className="btn">
            Contact Us
          </NavA>
        </nav>
      </div>
    </header>
  );
}

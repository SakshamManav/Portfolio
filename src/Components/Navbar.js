import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "./Navbar.css"; // Import external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <h1 className="logo">MANAV</h1>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()} // Ensure this matches the section IDs
                smooth={true}
                duration={500}
                className="nav-item"
                onClick={() => setIsOpen(false)} // Close mobile menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item} className="mobile-item">
              <Link
                to={item.toLowerCase()} // Ensure this matches the section IDs
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)} // Close mobile menu on click
                className="nav-item"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
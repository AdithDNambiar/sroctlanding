import { motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/sroct-logo-white.png";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Logo */}

      <div className="nav-logo">
        <img src={logo} alt="SROCT Logo" className="logo-image" />
        <span>SROCT</span>
      </div>

      {/* Navigation */}

      <ul className="nav-links">
        <li>
          <a href="#home">
            <FaHome />
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            <FaInfoCircle />
            About
          </a>
        </li>

        <li>
          <a href="#footer">
            <FaEnvelope />
            Contact
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;

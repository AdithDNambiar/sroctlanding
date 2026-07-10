import { motion } from "framer-motion";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

import "../styles/Navbar.css";
import logo from "../assets/sroct-logo-white.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div
        className="navbar-inner"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="nav-logo">
          <img src={logo} alt="SROCT Logo" className="logo-image" />
          <span>SROCT</span>
        </div>

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
      </motion.div>
    </nav>
  );
};

export default Navbar;
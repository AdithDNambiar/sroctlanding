import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaArrowRight } from "react-icons/fa";
import "../styles/Login.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    onLogin(name.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="login-page">
      <motion.div
        className="login-card glass"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="login-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome
        </motion.h1>

        <motion.p
          className="login-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Enter your name to continue
        </motion.p>

        <motion.div
          className="input-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaUser className="input-icon" />

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </motion.div>

        <motion.button
          className="login-btn"
          whileHover={{
            scale: 1.02
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
        >
          Continue
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Login;
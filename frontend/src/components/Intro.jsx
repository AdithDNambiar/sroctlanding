import { motion } from "framer-motion";
import logo from "../assets/sroct-logo-white.png";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-overlay"></div>

      <motion.div
        className="intro-card"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="intro-logo"
          initial={{ rotate: -30, opacity: 0 }}
          animate={{
            rotate: 0,
            opacity: 1,
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <img src={logo} alt="sroct-logo-white" className="intro-logo-image" />
        </motion.div>

        <motion.h1
          className="intro-title"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          Sroct
        </motion.h1>

        <motion.p
          className="intro-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
        >
          Building the future, one experience at a time.
        </motion.p>

        <motion.div
          className="loading-line"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            delay: 1.4,
            duration: 1.6,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Intro;

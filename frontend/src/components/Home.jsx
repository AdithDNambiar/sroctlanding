import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

import "../styles/Home.css";

const Home = ({ username }) => {
  return (
    <>
      <Navbar />

      <main id="home" className="home">
        <section className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, <span>{username}</span>
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
            >
              Sroct
            </motion.h1>

            <motion.h2
              className="coming-soon"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
            >
              <FaClock />
              Coming Soon
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
              }}
            >
              We're crafting something extraordinary.
              <br />
              A modern platform built with innovation, performance and
              simplicity at its core.
              <br />
              <br />
              Stay tuned for the launch.
            </motion.p>

            <motion.button
              className="notify-btn"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Notify Me
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </section>

        <About />

        <Footer />
      </main>
    </>
  );
};

export default Home;

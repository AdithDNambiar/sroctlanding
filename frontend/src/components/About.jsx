import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      <motion.div
        className="about-card glass"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <motion.h2
          className="about-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Sroct
        </motion.h2>

        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          SROCT is an all-in-one innovation ecosystem connecting people, teams, organizations, and institutions to collaborate, showcase projects, exchange knowledge, and transform ideas into impact, driving technological growth through a connected ecosystem where innovation and collaboration accelerate progress.

        </motion.p>

        <div className="feature-grid">

          <motion.div
            className="feature-card glass"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <FaLightbulb className="feature-icon" />

            <h3>Innovation</h3>

            <p>
              Creative ideas transformed into powerful digital
              experiences.
            </p>

          </motion.div>

          <motion.div
            className="feature-card glass"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <FaRocket className="feature-icon" />

            <h3>Performance</h3>

            <p>
              Fast, responsive and beautifully crafted user
              experiences.
            </p>

          </motion.div>

          <motion.div
            className="feature-card glass"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <FaShieldAlt className="feature-icon" />

            <h3>Reliability</h3>

            <p>
              Built with scalability, security and future growth
              in mind.
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default About;
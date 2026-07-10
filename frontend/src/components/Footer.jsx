import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      className="footer glass"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Sroct</h2>

          <p>
            Building innovative digital experiences with modern technologies and
            elegant design.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#footer">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>

          <div className="social-icons">
            <motion.a
              href="#"
              whileHover={{
                scale: 1.2,
                rotate: 8,
              }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
  href="https://www.linkedin.com/company/sroct/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="SROCT LinkedIn"
  whileHover={{
    scale: 1.2,
    rotate: -8,
  }}
>
  <FaLinkedin />
</motion.a>

            <motion.a
              href="mailto:sroct.off@gmail.com"
              whileHover={{
                scale: 1.2,
              }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} <strong>Sroct</strong>. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

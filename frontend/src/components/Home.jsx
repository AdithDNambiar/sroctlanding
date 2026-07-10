import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaClock,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

import "../styles/Home.css";

const Home = ({ username }) => {
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: username || "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleNotifySubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError("Please enter your name and email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setShowNotifyModal(false);
      setShowSuccessModal(true);

      setFormData({
        name: username || "",
        email: "",
      });
    } catch (error) {
      setFormError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
              SROCT
            </motion.h1>

            <motion.h2
              className="coming-soon"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaClock />
              Launching soon.
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              SROCT is an all in one collaboration ecosystem where students, professionals, startups, and organizations can discover teammates, build projects, and showcase verified contributions. Instead of switching between platforms like LinkedIn, GitHub, Discord, and Trello, SROCT brings networking, collaboration, communities, and opportunities under one roof. Our vision is to become the platform where people don't just connect,
They build together.
              <br />
              <br />
              Launching soon. Build. Connect. Grow.
            </motion.p>

            <motion.button
              type="button"
              className="notify-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFormError("");
                setShowNotifyModal(true);
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

      <AnimatePresence>
        {showNotifyModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setShowNotifyModal(false)}
          >
            <motion.div
              className="notify-modal glass"
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Close notification form"
                onClick={() => setShowNotifyModal(false)}
              >
                <FaTimes />
              </button>

              <h2>Get notified at launch</h2>

              <p>
                Join the SROCT early-access list and be among the first to
                enter the ecosystem.
              </p>

              <form className="notify-form" onSubmit={handleNotifySubmit}>
                <label htmlFor="notify-name">Name</label>

                <div className="modal-input-wrapper">
                  <FaUser />
                  <input
                    id="notify-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </div>

                <label htmlFor="notify-email">Email address</label>

                <div className="modal-input-wrapper">
                  <FaEnvelope />
                  <input
                    id="notify-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={150}
                    required
                  />
                </div>

                {formError && (
                  <p className="form-error" role="alert">
                    {formError}
                  </p>
                )}

                <motion.button
                  type="submit"
                  className="modal-submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Early Access"}
                  {!isSubmitting && <FaArrowRight />}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}

        {showSuccessModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setShowSuccessModal(false)}
          >
            <motion.div
              className="success-modal glass"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <FaCheckCircle className="success-icon" />

              <h2>Submitted successfully</h2>

              <p>
                You will receive an email notification once SROCT launches.
              </p>

              <button
                type="button"
                className="modal-submit-btn"
                onClick={() => setShowSuccessModal(false)}
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
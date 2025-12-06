import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-shell">
      {/* Header */}
      <motion.header
        className="section-header"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        <h2 className="section-title">Start a Project</h2>
        <p className="section-desc">
          Ready to elevate everything? Let’s build what your business needs next.
        </p>
      </motion.header>

      {/* Contact Form */}
      <motion.form
        className="contact-form"
        style={{
          maxWidth: "760px",
          width: "100%",
          marginTop: "40px",
          padding: "32px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.55, staggerChildren: 0.12 }}
        variants={fadeUp}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! We will get back to you shortly.");
        }}
      >
        {/* Field Groups */}
        <motion.div className="field" variants={fadeUp}>
          <label>Your Name</label>
          <input required type="text" placeholder="Enter full name" />
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Email</label>
          <input required type="email" placeholder="name@company.com" />
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Brand / Service</label>
          <select required>
            <option value="">Select</option>
            <option value="velano">Velano — Web & Digital Systems</option>
            <option value="inkforge-brand">InkForge — Branding</option>
            <option value="inkforge-rebrand">InkForge — Rebranding</option>
            <option value="inkforge-graphic">InkForge — Graphic Design</option>
          </select>
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Message</label>
          <textarea rows="5" placeholder="Tell us about your project..."></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="btn-primary"
          variants={fadeUp}
          style={{
            marginTop: "18px",
            width: "100%",
            padding: "14px",
            fontSize: "17px",
            borderRadius: "10px",
            fontWeight: "600",
          }}
        >
          Submit Request
        </motion.button>
      </motion.form>
    </div>
  );
}
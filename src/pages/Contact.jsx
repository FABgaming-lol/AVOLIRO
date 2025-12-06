import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const message = e.target.message.value;

    const mailToLink = `mailto:AVOLIRO@proton.me?subject=Project Inquiry - ${encodeURIComponent(
      service
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailToLink;
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
        onSubmit={handleSubmit}
      >
        {/* Field Groups */}
        <motion.div className="field" variants={fadeUp}>
          <label>Your Name</label>
          <input required type="text" name="name" placeholder="Enter full name" />
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Email</label>
          <input required type="email" name="email" placeholder="name@company.com" />
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Brand / Service</label>
          <select required name="service">
            <option value="">Select</option>
            <option value="Velano — Web & Digital Systems">Velano — Web & Digital Systems</option>
            <option value="InkForge — Branding">InkForge — Branding</option>
            <option value="InkForge — Rebranding">InkForge — Rebranding</option>
            <option value="InkForge — Graphic Design">InkForge — Graphic Design</option>
          </select>
        </motion.div>

        <motion.div className="field" variants={fadeUp}>
          <label>Message</label>
          <textarea rows="5" name="message" placeholder="Tell us about your project..."></textarea>
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
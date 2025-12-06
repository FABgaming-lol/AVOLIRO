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
      {/* Contact Form Embed */}
<motion.div
  style={{
    maxWidth: "760px",
    width: "100%",
    marginTop: "40px"
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.55 }}
  variants={fadeUp}
>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSeopkotDo3TdC8DFrNXUgRXk3rr6X6hpkbqtH1VG9ZqykY2qQ/viewform?embedded=true"
    width="100%"
    height="1400"
    frameBorder="0"
    marginHeight="0"
    marginWidth="0"
    style={{
      border: "none",
      background: "transparent",
      borderRadius: "18px",
    }}
  >
    Loading…
  </iframe>
</motion.div>
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
        <h2 className="section-title">About Avoliro</h2>
        <p className="section-desc">
          We elevate everything — your presence, performance & potential.
        </p>
      </motion.header>

      {/* Who We Are */}
      <motion.div
        className="section-body"
        style={{ maxWidth: "820px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeUp}
      >
        <p>
          Avoliro is a modern design & technology studio built for forward-thinking
          businesses. We craft bold brands and high-performance digital systems that
          help businesses launch faster, operate smarter, and scale bigger.
        </p>
      </motion.div>

      {/* Sub Brands */}
      <motion.h3
        className="section-category"
        style={{ marginTop: "60px" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        Sub-Brands & Core Capabilities
      </motion.h3>

      <motion.div
        className="about-brands"
        style={{
          display: "grid",
          gap: "28px",
          marginTop: "24px",
          maxWidth: "900px",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Velano */}
        <motion.div
          className="brand-card"
          variants={fadeUp}
          style={{
            padding: "22px 26px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <strong style={{ fontSize: "20px" }}>Velano</strong>
          <p style={{ opacity: 0.85, marginTop: "6px" }}>
            Web & Digital Systems
            <br />
            High-performance websites, dashboards, automation & digital products.
          </p>
        </motion.div>

        {/* InkForge */}
        <motion.div
          className="brand-card"
          variants={fadeUp}
          style={{
            padding: "22px 26px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <strong style={{ fontSize: "20px" }}>InkForge</strong>
          <p style={{ opacity: 0.85, marginTop: "6px" }}>
            Branding & Creative
            <br />
            Identity design, re-branding, marketing visuals & communication systems.
          </p>
        </motion.div>
      </motion.div>

      {/* Final message */}
      <motion.p
        className="section-body"
        style={{ marginTop: "38px", maxWidth: "820px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeUp}
      >
        Together, Velano + InkForge deliver a complete growth ecosystem: presence, 
        performance, communication, and trust — everything under one strategic direction.
      </motion.p>
    </div>
  );
}
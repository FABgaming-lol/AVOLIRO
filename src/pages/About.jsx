import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-shell">

      {/* ================= HEADER ================= */}
      <motion.header
        className="section-header"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        <h2 className="section-title">About AVOLIRO</h2>
        <p className="section-desc">
          A structured parent company for branding, digital systems, and marketing.
        </p>
      </motion.header>

      {/* ================= OVERVIEW ================= */}
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
          AVOLIRO is a parent company that operates specialized divisions focused on
          branding, digital systems, and marketing. The company provides structure,
          coordination, and oversight to ensure that all work is aligned and
          executed consistently.
        </p>
      </motion.div>

      {/* ================= STRUCTURE ================= */}
      <motion.div
        className="section-body"
        style={{ maxWidth: "820px", marginTop: "24px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        variants={fadeUp}
      >
        <p>
          Rather than offering isolated services, AVOLIRO manages a system-based
          approach. Each division is responsible for a specific area of execution,
          while AVOLIRO maintains strategic direction and alignment across all
          divisions.
        </p>
      </motion.div>

      {/* ================= DIVISIONS ================= */}
      <motion.h3
        className="section-category"
        style={{ marginTop: "60px" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Company Divisions
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
            Digital Systems
            <br />
            Responsible for websites, applications, dashboards, automation,
            and digital infrastructure.
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
            Brand & Creative
            <br />
            Responsible for brand identity, visual systems,
            and creative direction.
          </p>
        </motion.div>

        {/* Brandora */}
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
          <strong style={{ fontSize: "20px" }}>Brandora</strong>
          <p style={{ opacity: 0.85, marginTop: "6px" }}>
            Marketing & Growth
            <br />
            Responsible for marketing strategy, content planning,
            distribution, and growth execution.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= FINAL STATEMENT ================= */}
      <motion.p
        className="section-body"
        style={{ marginTop: "42px", maxWidth: "820px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        variants={fadeUp}
      >
        AVOLIRO ensures that all divisions operate under a shared structure and
        direction. This approach improves consistency, reduces fragmentation,
        and supports long-term business growth.
      </motion.p>

    </div>
  );
}

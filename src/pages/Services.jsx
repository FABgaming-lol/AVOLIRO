import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" }
  };

  return (
    <motion.div
      className="page-shell services-page"
      initial="initial"
      animate="animate"
    >

      {/* ================= HERO ================= */}
      <motion.section className="services-hero" {...fadeUp}>
        <h1 className="services-main-title">What We Build</h1>
        <p className="services-sub">
          AVOLIRO does not sell isolated services.
          <br />
          We design and deliver complete business systems.
        </p>
      </motion.section>

      {/* ================= SYSTEM 01 ================= */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.15 }}>
        <h3 className="services-cat">Brand Foundation System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Identity & Brand Structure</h4>
            <p className="service-body">
              A complete brand foundation including identity, visual language,
              and brand rules — built for clarity, consistency, and long-term growth.
            </p>
            <span className="service-link">Executed by InkForge</span>
          </div>
        </div>
      </motion.section>

      {/* ================= SYSTEM 02 ================= */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.3 }}>
        <h3 className="services-cat">Digital Presence System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Websites & Digital Infrastructure</h4>
            <p className="service-body">
              High-performance websites, dashboards, and digital systems that
              establish credibility and scale with your business.
            </p>
            <span className="service-link">Executed by Velano</span>
          </div>
        </div>
      </motion.section>

      {/* ================= SYSTEM 03 ================= */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.45 }}>
        <h3 className="services-cat">Growth System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Marketing & Distribution System</h4>
            <p className="service-body">
              A structured growth system where brand, digital platforms,
              and communication are aligned to scale reach and demand
              over time.
            </p>
            <span className="service-link">Executed by Brandora · Directed by AVOLIRO</span>
          </div>
        </div>
      </motion.section>

      {/* ================= DIVISIONS ================= */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.6 }}>
        <h3 className="services-cat">Our Execution Divisions</h3>

        <div className="services-list">

          <a
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">Velano — Digital Systems</h4>
            <p className="service-body">
              Engineering-focused execution of websites, apps, automation,
              and performance-critical digital infrastructure.
            </p>
            <span className="service-link">Explore Velano ↗</span>
          </a>

          <a
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">InkForge — Brand & Creative</h4>
            <p className="service-body">
              Visual identity, brand systems, and creative direction
              that define how brands are seen and remembered.
            </p>
            <span className="service-link">Explore InkForge ↗</span>
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="service-card"
          >
            <h4 className="service-title">Brandora — Marketing & Growth</h4>
            <p className="service-body">
              Strategy-led marketing, content systems, distribution,
              and growth execution built to scale reach sustainably.
            </p>
            <span className="service-link">Brandora (launching)</span>
          </a>

        </div>
      </motion.section>

    </motion.div>
  );
}
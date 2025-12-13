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
        <h1 className="services-main-title">Business Systems</h1>
        <p className="services-sub">
          AVOLIRO delivers complete business systems.
          <br />
          Individual services are not offered in isolation.
        </p>
      </motion.section>

      {/* ================= SYSTEM 01 ================= */}
      <motion.section
        className="services-section"
        {...fadeUp}
        transition={{ delay: 0.15 }}
      >
        <h3 className="services-cat">Brand Foundation System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Brand Identity and Structure</h4>
            <p className="service-body">
              This system defines the visual identity, brand structure,
              and usage guidelines required to maintain consistency
              across all brand materials.
            </p>
            <span className="service-link">Executed by InkForge</span>
          </div>
        </div>
      </motion.section>

      {/* ================= SYSTEM 02 ================= */}
      <motion.section
        className="services-section"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        <h3 className="services-cat">Digital Presence System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Websites and Digital Infrastructure</h4>
            <p className="service-body">
              This system includes websites, dashboards, and supporting
              digital infrastructure required for daily business
              operations and scalability.
            </p>
            <span className="service-link">Executed by Velano</span>
          </div>
        </div>
      </motion.section>

      {/* ================= SYSTEM 03 ================= */}
      <motion.section
        className="services-section"
        {...fadeUp}
        transition={{ delay: 0.45 }}
      >
        <h3 className="services-cat">Growth System</h3>

        <div className="services-list">
          <div className="service-card">
            <h4 className="service-title">Marketing and Distribution</h4>
            <p className="service-body">
              This system aligns marketing strategy, content planning,
              and distribution channels to support steady and
              sustainable growth over time.
            </p>
            <span className="service-link">
              Executed by Brandora · Directed by AVOLIRO
            </span>
          </div>
        </div>
      </motion.section>

      {/* ================= DIVISIONS ================= */}
      <motion.section
        className="services-section"
        {...fadeUp}
        transition={{ delay: 0.6 }}
      >
        <h3 className="services-cat">Execution Divisions</h3>

        <div className="services-list">

          <a
            href="https://velano-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">Velano — Digital Systems</h4>
            <p className="service-body">
              Responsible for the engineering and technical execution
              of websites, applications, automation, and digital
              infrastructure.
            </p>
            <span className="service-link">View Velano ↗</span>
          </a>

          <a
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">InkForge — Brand & Creative</h4>
            <p className="service-body">
              Responsible for brand identity, visual systems,
              and creative direction across all brand materials.
            </p>
            <span className="service-link">View InkForge ↗</span>
          </a>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="service-card"
          >
            <h4 className="service-title">Brandora — Marketing & Growth</h4>
            <p className="service-body">
              Responsible for marketing strategy, content planning,
              distribution, and growth execution.
            </p>
            <span className="service-link">Brandora (launching)</span>
          </a>

        </div>
      </motion.section>

    </motion.div>
  );
}

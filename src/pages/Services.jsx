import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <motion.div
      className="page-shell services-page"
      initial="initial"
      animate="animate"
    >

      <motion.section className="services-hero" {...fadeUp}>
        <h1 className="services-main-title">Our Services</h1>
        <p className="services-sub">
          Solutions designed to elevate your business operations,
          presence and growth—backed by strategy.
        </p>
      </motion.section>

      {/* Velano */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.2 }}>
        <h3 className="services-cat">Velano — Web & Digital Systems</h3>

        <div className="services-list">
          <a
            href="https://velano-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">Web & Digital Systems</h4>
            <p className="service-body">
              High-performance websites, dashboards, automation systems —
              everything a modern business depends on.
            </p>
            <span className="service-link">Explore Velano ↗</span>
          </a>
        </div>
      </motion.section>

      {/* InkForge */}
      <motion.section className="services-section" {...fadeUp} transition={{ delay: 0.35 }}>
        <h3 className="services-cat">InkForge — Branding & Creative</h3>

        <div className="services-list">
          <a
            href="https://inkforge-by-avoliro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card"
          >
            <h4 className="service-title">Branding & Creative</h4>
            <p className="service-body">
              Strategic branding and visual identity systems that elevate how your audience recognizes and trusts you.
            </p>
            <span className="service-link">Explore InkForge ↗</span>
          </a>
        </div>
      </motion.section>

    </motion.div>
  );
}
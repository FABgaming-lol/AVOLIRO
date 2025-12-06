import React from "react";
import { motion } from "framer-motion";

export default function Work() {
  const fadeUp = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  return (
    <motion.div
      className="page-shell work-page"
      initial="initial"
      animate="animate"
    >
      <motion.section className="work-hero" {...fadeUp}>
        <h1 className="work-title">Our Work</h1>
        <p className="work-sub">
          Selected design and digital execution delivered across our brands —
          built for growth.
        </p>
      </motion.section>

      {/* Velano */}
      <motion.section
        className="work-section"
        {...fadeUp}
        transition={{ delay: 0.15 }}
      >
        <h3 className="work-cat">Velano — Web & Digital Systems</h3>

        <div className="work-list">
          <div className="work-card">
            <h4 className="work-name">Business Dashboard UI</h4>
            <p className="work-body">
              Custom dashboard for secure business operations and data handling.
            </p>
            <a
              href="https://velano-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              Explore Velano ↗
            </a>
          </div>
        </div>
      </motion.section>

      {/* InkForge */}
      <motion.section
        className="work-section"
        {...fadeUp}
        transition={{ delay: 0.3 }}
      >
        <h3 className="work-cat">InkForge — Branding & Creative</h3>

        <div className="work-list">
          <div className="work-card">
            <h4 className="work-name">Branding Systems</h4>
            <p className="work-body">
              A scalable visual identity system crafted for modern brands.
            </p>
            <a
              href="https://inkforge-by-avoliro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              Explore InkForge ↗
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
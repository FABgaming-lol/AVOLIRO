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
      {/* Header */}
      <motion.section className="work-hero" {...fadeUp}>
        <h1 className="work-title">Selected Work</h1>
        <p className="work-sub">
          A curated selection of digital and branding projects executed under our
          sub-brands — delivering clarity, reliability and results.
        </p>
      </motion.section>

      {/* Work Sections */}
      <motion.section className="work-section" {...fadeUp} transition={{ delay: 0.15 }}>
        <h3 className="work-cat">Velano — Web & Digital Systems</h3>

        <div className="work-list">
          <div className="work-item">
            <h4 className="work-name">High-Performance Web Systems</h4>
            <p className="work-body">
              Websites, dashboards and automation tools supporting business operations at scale.
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

      <motion.section className="work-section" {...fadeUp} transition={{ delay: 0.25 }}>
        <h3 className="work-cat">InkForge — Branding & Creative</h3>

        <div className="work-list">
          <div className="work-item">
            <h4 className="work-name">Brand Identity Systems</h4>
            <p className="work-body">
              Visual design that builds recognition, trust and storytelling throughout your business.
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
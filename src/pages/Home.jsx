import React from "react";
import { motion } from "framer-motion";
import Lightning from "../components/Lightning";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="page-shell">
      <section className="hero-block">
        <div className="hero-lightning-layer">
  <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
  <div className="hero-overlay"></div>
</div>
        <motion.div className="hero-content" initial="initial" animate="animate">
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="hero-eyebrow">Future-ready Businesses</div>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp} transition={{ delay: 0.22 }}>
            Avoliro
          </motion.h1>

          <motion.p className="hero-tagline" {...fadeUp} transition={{ delay: 0.4 }}>
            Elevate Everything
          </motion.p>

          <motion.p className="hero-sub" {...fadeUp} transition={{ delay: 0.52 }}>
            We help companies elevate everything — through branding, digital products
            and communication systems.
          </motion.p>

          <motion.div
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            {...fadeUp}
            transition={{ delay: 0.65 }}
          >
            <a href="/services" className="btn-primary">
              Services
            </a>
            <a href="/contact" className="btn-ghost">
              Start project
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-header section-block">
        <h2 className="section-title">Services</h2>
        <p className="section-desc">Two focused teams under one direction.</p>
      </section>

      <div className="grid grid-2">
        <a
          className="card card-link"
          href="https://velano-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">01 — Velano</div>
          <h3 className="card-title">Web & Digital Systems</h3>
          <p className="card-body">
            High-performance websites, dashboards and internal tools for modern companies.
          </p>
          <span className="project-link">Explore Velano ↗</span>
        </a>

        <a
          className="card card-link"
          href="https://inkforge-by-avoliro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">02 — InkForge</div>
          <h3 className="card-title">Branding & Creative</h3>
          <p className="card-body">
            Identity, rebranding and graphic design that keeps your brand consistent everywhere.
          </p>
          <span className="project-link">Explore InkForge ↗</span>
        </a>
      </div>
    </div>
  );
}
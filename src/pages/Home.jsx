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

      {/* ================= HERO ================= */}
      <section className="hero-block">
        <div className="hero-lightning-layer">
          <Lightning
            hue={220}
            xOffset={0}
            speed={0.8}
            intensity={0.5}
            size={0.85}
          />
          <div className="hero-overlay"></div>
        </div>

        <motion.div className="hero-content" initial="initial" animate="animate">
          {/* Eyebrow */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div
              className="hero-eyebrow"
              style={{ fontSize: "18px", fontWeight: 700 }}
            >
              Parent company behind specialized digital divisions
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="hero-title"
            {...fadeUp}
            transition={{ delay: 0.22 }}
          >
            AVOLIRO
          </motion.h1>

          {/* by Yuvi */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: "18px",
              fontWeight: 600,
              opacity: 0.8,
              marginTop: "-6px",
              letterSpacing: "1px",
            }}
          >
            by Yuvi
          </motion.div>

          {/* Core message */}
          <motion.p
            className="hero-tagline"
            {...fadeUp}
            transition={{ delay: 0.4 }}
          >
            We build business systems — not just brands or websites.
          </motion.p>

          <motion.p
            className="hero-sub"
            {...fadeUp}
            transition={{ delay: 0.52 }}
          >
            AVOLIRO operates focused divisions that design, build, and scale modern
            businesses under one strategic direction.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.65 }}
            style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "36px",
            }}
          >
            <a href="#ecosystem" className="btn-primary">
              Explore the Ecosystem
            </a>
            <a href="/contact" className="btn-ghost">
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Why most businesses struggle</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "820px", margin: "0 auto" }}
        >
          Branding, websites, and growth are usually handled by different people.
          Nothing aligns. Quality drops. Growth becomes unstable.
          <br />
          <br />
          This isn’t a talent problem. It’s a system problem.
        </p>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">How AVOLIRO solves this</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "820px", margin: "0 auto" }}
        >
          AVOLIRO is a parent company that operates specialized divisions under one
          strategic system. Each division focuses deeply on its domain while AVOLIRO
          ensures everything works together.
        </p>
      </section>

      {/* ================= DIVISIONS ================= */}
      <section id="ecosystem" className="section-header section-block">
        <h2 className="section-title">Our divisions</h2>
        <p className="section-desc">
          Strategy at the center. Specialized execution at the edges.
        </p>
      </section>

      <div className="grid grid-2">
        <a
          className="card card-link"
          href="https://velano-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">Division 01 — Velano</div>
          <h3 className="card-title">Digital Systems</h3>
          <p className="card-body">
            Websites, web apps, dashboards, automation, and performance-driven
            digital infrastructure built to scale.
          </p>
          <span className="project-link">Explore Velano ↗</span>
        </a>

        <a
          className="card card-link"
          href="https://inkforge-by-avoliro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">Division 02 — InkForge</div>
          <h3 className="card-title">Brand & Creative</h3>
          <p className="card-body">
            Brand identity, visual systems, and creative direction that shape how
            businesses are seen, felt, and remembered.
          </p>
          <span className="project-link">Explore InkForge ↗</span>
        </a>
      </div>

      {/* ================= SYSTEMS & PLATFORMS (BRANDORA) ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Systems & Platforms</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "820px", margin: "0 auto" }}
        >
          In addition to its divisions, AVOLIRO develops proprietary systems that
          bring structure, consistency, and scalability to long-term execution.
        </p>
      </section>

      <div className="grid grid-1">
        <div className="card">
          <div className="card-label">Internal Platform — Brandora</div>
          <h3 className="card-title">Brand Operating System</h3>
          <p className="card-body">
            Brandora is AVOLIRO’s internal brand operating system.
            It defines the rules, structure, and logic behind how brands are built,
            managed, and scaled over time.
            <br />
            <br />
            Brandora is not a service.
            It is proprietary infrastructure implemented through InkForge.
          </p>
          <span className="project-link">Proprietary System</span>
        </div>
      </div>

      {/* ================= SYSTEMS (CLIENT-FACING) ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">What we build</h2>
        <p className="section-desc">
          We don’t sell tasks. We build systems.
        </p>
      </section>

      <div className="grid grid-3">
        <div className="card">
          <h3 className="card-title">Brand Foundation System</h3>
          <p className="card-body">
            Identity, visual language, and brand rules designed for long-term
            consistency and clarity.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Digital Presence System</h3>
          <p className="card-body">
            High-performance websites and digital infrastructure built for
            credibility and scale.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Growth System</h3>
          <p className="card-body">
            Brand, digital, and communication systems working together for serious,
            long-term growth.
          </p>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Start with AVOLIRO</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          Every project starts at AVOLIRO. We qualify, structure, and route it to
          the right division — with no confusion.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a href="/contact" className="btn-primary">
            Start a Project
          </a>
        </div>
      </section>

    </div>
  );
}
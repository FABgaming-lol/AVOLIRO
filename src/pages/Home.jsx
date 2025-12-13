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
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <div className="hero-eyebrow" style={{ fontSize: "18px", fontWeight: 700 }}>
              Parent company behind specialized business divisions
            </div>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp} transition={{ delay: 0.22 }}>
            AVOLIRO
          </motion.h1>

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

          <motion.p className="hero-tagline" {...fadeUp} transition={{ delay: 0.4 }}>
            We build structured business growth — not disconnected services.
          </motion.p>

          <motion.p className="hero-sub" {...fadeUp} transition={{ delay: 0.52 }}>
            AVOLIRO coordinates brand, digital systems, and marketing
            under one strategic direction.
          </motion.p>

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
            <a href="#divisions" className="btn-primary">
              Explore Divisions
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
        <p className="section-desc" style={{ maxWidth: "820px", margin: "0 auto" }}>
          Branding, websites, and marketing are usually handled in isolation.
          Nothing aligns. Quality drops. Growth becomes inconsistent.
          <br /><br />
          This isn’t a talent problem. It’s a structure problem.
        </p>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">How AVOLIRO solves this</h2>
        <p className="section-desc" style={{ maxWidth: "820px", margin: "0 auto" }}>
          AVOLIRO acts as the central layer — aligning specialized divisions
          so execution moves in one direction.
        </p>
      </section>

      {/* ================= DIVISIONS ================= */}
      <section id="divisions" className="section-header section-block">
        <h2 className="section-title">Our divisions</h2>
        <p className="section-desc">
          Focused execution. Central strategy.
        </p>
      </section>

      <div className="grid grid-3">
        <a
          className="card card-link"
          href="https://velano-by-avoliro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">Division 01 — Velano</div>
          <h3 className="card-title">Digital Systems</h3>
          <p className="card-body">
            Websites, web apps, dashboards, automation,
            and scalable digital infrastructure.
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
            Brand identity, visual systems, and creative direction
            that define perception.
          </p>
          <span className="project-link">Explore InkForge ↗</span>
        </a>

        <a
          className="card card-link"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="card-label">Division 03 — Brandora</div>
          <h3 className="card-title">Marketing & Growth</h3>
          <p className="card-body">
            Strategy-led marketing, content systems,
            distribution, and growth execution.
          </p>
          <span className="project-link">Brandora (launching)</span>
        </a>
      </div>

      {/* ================= SYSTEMS ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">What we build</h2>
        <p className="section-desc">
          We don’t sell tasks. We design systems.
        </p>
      </section>

      <div className="grid grid-3">
        <div className="card">
          <h3 className="card-title">Brand Foundation System</h3>
          <p className="card-body">
            Identity and visual structure — executed by InkForge.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Digital Presence System</h3>
          <p className="card-body">
            Platforms and infrastructure — executed by Velano.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Growth System</h3>
          <p className="card-body">
            Marketing strategy and distribution — executed by Brandora.
          </p>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Start with AVOLIRO</h2>
        <p className="section-desc" style={{ maxWidth: "760px", margin: "0 auto" }}>
          Every project begins at AVOLIRO.
          We assess, structure, and route execution correctly.
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
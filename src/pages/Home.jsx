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
            <div
              className="hero-eyebrow"
              style={{ fontSize: "18px", fontWeight: 700 }}
            >
              Parent company operating specialized business divisions
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            {...fadeUp}
            transition={{ delay: 0.22 }}
          >
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

          <motion.p
            className="hero-tagline"
            {...fadeUp}
            transition={{ delay: 0.4 }}
          >
            AVOLIRO builds structured systems for branding, digital platforms,
            and marketing.
          </motion.p>

          <motion.p
            className="hero-sub"
            {...fadeUp}
            transition={{ delay: 0.52 }}
          >
            The company manages multiple divisions and ensures that branding,
            digital systems, and marketing operate together under a single
            direction.
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
              View Divisions
            </a>
            <a href="/contact" className="btn-ghost">
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Common business challenges</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "820px", margin: "0 auto" }}
        >
          Branding, websites, and marketing are often handled by different people
          or teams. When these areas are not aligned, results become inconsistent
          and growth slows.
          <br /><br />
          This is usually caused by a lack of structure rather than a lack of skill.
        </p>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">The AVOLIRO approach</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "820px", margin: "0 auto" }}
        >
          AVOLIRO provides a central structure that coordinates all work across
          its divisions, ensuring consistency and long-term alignment.
        </p>
      </section>

      {/* ================= DIVISIONS ================= */}
      <section id="divisions" className="section-header section-block">
        <h2 className="section-title">Company divisions</h2>
        <p className="section-desc">
          Each division focuses on a specific area of execution.
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
            Websites, applications, dashboards, and automation systems
            that support business operations and scalability.
          </p>
          <span className="project-link">View Velano ↗</span>
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
            that define how a business is presented.
          </p>
          <span className="project-link">View InkForge ↗</span>
        </a>

        <a
          className="card card-link"
          href="https://brandora-by-avoliro.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-label">Division 03 — Brandora</div>
          <h3 className="card-title">Marketing & Growth</h3>
          <p className="card-body">
            Marketing strategy, content planning, distribution,
            and growth execution.
          </p>
          <span className="project-link">View Brandora ↗</span>
        </a>
      </div>

      {/* ================= SYSTEMS ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Business systems</h2>
        <p className="section-desc">
          AVOLIRO delivers complete systems rather than individual tasks.
        </p>
      </section>

      <div className="grid grid-3">
        <div className="card">
          <h3 className="card-title">Brand Foundation System</h3>
          <p className="card-body">
            Brand identity and visual structure, executed by InkForge.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Digital Presence System</h3>
          <p className="card-body">
            Websites and digital infrastructure, executed by Velano.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Growth System</h3>
          <p className="card-body">
            Marketing strategy and distribution systems,
            executed by Brandora.
          </p>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <section className="section-header section-block">
        <h2 className="section-title">Project initiation</h2>
        <p
          className="section-desc"
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          All projects begin with AVOLIRO. Requirements are reviewed and
          assigned to the appropriate division.
        </p>

        <div style={{ marginTop: "32px" }}>
          <a href="/contact" className="btn-primary">
            Submit a Request
          </a>
        </div>
      </section>

    </div>
  );
}

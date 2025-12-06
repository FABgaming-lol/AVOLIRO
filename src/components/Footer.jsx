import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 22px",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        
        {/* Tagline */}
        <p style={{
          opacity: 0.9,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.22em"
        }}>
          Elevate Everything
        </p>

        {/* Navigation */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "11px", color: "#8087a8" }}>
          © {new Date().getFullYear()} Avoliro — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
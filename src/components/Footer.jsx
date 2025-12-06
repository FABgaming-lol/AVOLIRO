import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <p className="footer-tagline">Elevate Everything</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="footer-meta">© {year} Avoliro — All rights reserved.</p>
      </div>
    </footer>
  );
}
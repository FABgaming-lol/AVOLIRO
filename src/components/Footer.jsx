import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong style={{ letterSpacing: '0.12em' }}>AVOLIRO</strong>
          <p className="footer-tagline">
            Design, technology & strategy for growing companies.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">Studio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
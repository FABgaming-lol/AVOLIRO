import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${solid ? "nav-solid" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="brand-mark" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Avoliro" className="nav-logo-img" />
          <span className="brand-name">Avoliro</span>
        </Link>

        <nav className="nav-links-desktop">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/work" className="nav-link">Work</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        <button
          className="nav-toggle"
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="nav-mobile-menu">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/work" onClick={() => setIsOpen(false)}>Work</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
}
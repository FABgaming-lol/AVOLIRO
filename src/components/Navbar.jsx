import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this file exists

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-shell ${isSolid ? "nav-solid" : ""}`}>
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="brand-mark" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Avoliro Logo" className="brand-logo-img" />
          <span className="brand-name">Avoliro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/work" className="nav-link">Work</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
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
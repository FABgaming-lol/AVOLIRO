import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBrandClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <header className={`nav-shell ${solid ? 'nav-solid' : ''}`}>
      <div className="nav-inner">
        <button className="brand-mark" onClick={handleBrandClick}>
          <img src={logo} alt="Avoliro logo" className="brand-logo-img" />
          <div className="brand-name">AVOLIRO</div>
        </button>

        <nav className="nav-links-desktop">
          <NavLink to="/" className="nav-link" onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/work" className="nav-link" onClick={handleNavClick}>
            Work
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={handleNavClick}>
            Services
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
            Studio
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
            Contact
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <div className="nav-toggle-lines">
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-menu">
          <NavLink to="/" className="nav-mobile-item" onClick={handleNavClick}>
            Home
          </NavLink>
          <NavLink to="/work" className="nav-mobile-item" onClick={handleNavClick}>
            Work
          </NavLink>
          <NavLink to="/services" className="nav-mobile-item" onClick={handleNavClick}>
            Services
          </NavLink>
          <NavLink to="/about" className="nav-mobile-item" onClick={handleNavClick}>
            Studio
          </NavLink>
          <NavLink to="/contact" className="nav-mobile-item" onClick={handleNavClick}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}
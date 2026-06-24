import React, { useState } from 'react';
import Logo from './Logo';
import '../assets/css/Header.css';

export default function Header({ theme, toggleTheme, onOpenFeedback }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="logo-container-wrap" onClick={(e) => handleNavClick(e, 'home')} style={{ cursor: 'pointer' }}>
          <Logo />
        </div>
        <div className="nav-links">
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Process</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>
        <div className="nav-right">
          {/* THEME TOGGLE */}
          <label className="theme-toggle" title="Toggle dark / light mode">
            <input 
              type="checkbox" 
              checked={theme === 'light'} 
              onChange={toggleTheme} 
            />
            <div className="toggle-track">
              <span>🌙</span>
              <span>☀️</span>
            </div>
            <div className="toggle-knob"></div>
          </label>
          {/* ENQUIRY DROPDOWN */}
          <div 
            className="nav-dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="nav-cta" 
              onClick={(e) => { e.preventDefault(); setIsDropdownOpen(!isDropdownOpen); }}
            >
              Enquiry <i className="fas fa-chevron-down" style={{ fontSize: '10px', marginLeft: '6px' }}></i>
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <i className="fas fa-paper-plane"></i> Project Enquiry
              </a>
              <button onClick={() => { setIsDropdownOpen(false); onOpenFeedback(); }}>
                <i className="fas fa-star"></i> Send Feedback
              </button>
            </div>
          </div>

          <button 
            className={`hamburger ${isMobileOpen ? 'active' : ''}`} 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mob-nav ${isMobileOpen ? 'open' : ''}`}>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
        <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Process</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        <div className="mob-divider"></div>
        <a href="#contact" className="mob-sub-link" onClick={(e) => handleNavClick(e, 'contact')}>
          <i className="fas fa-paper-plane"></i> Project Enquiry
        </a>
        <button className="mob-sub-btn" onClick={() => { setIsMobileOpen(false); onOpenFeedback(); }}>
          <i className="fas fa-star"></i> Send Feedback
        </button>
      </div>
    </>
  );
}

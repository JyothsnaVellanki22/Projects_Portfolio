import React, { useState, useEffect } from 'react';
import { PERSONAL_BIO } from '../../../domain/models/Bio';
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon, CloseIcon } from '../../common/Icons';
import './header.css';

export default function Header({ onNavigateHome, onNavigateProjects, isAllProjectsActive }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateProjects) onNavigateProjects();
  };

  const handleAboutClick = (e) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector('#about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  const handleContactClick = (e) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          {/* Simple, clean Brand Identity */}
          <a href="#top" className="site-brand" aria-label="Home" onClick={handleHomeClick}>
            <span className="brand-name">{PERSONAL_BIO.name}</span>
            <span className="brand-dot">&bull;</span>
            <span className="brand-role">Software Engineer</span>
          </a>

          {/* Clean Navigation Menu */}
          <nav className={`site-nav-wrap ${mobileMenuOpen ? 'open' : ''}`} aria-label="Main Navigation">
            <ul className="site-nav">
              <li>
                <a 
                  href="#top" 
                  className={`site-nav-link ${!isAllProjectsActive ? 'active' : ''}`}
                  onClick={handleHomeClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`site-nav-link ${isAllProjectsActive ? 'active' : ''}`}
                  onClick={handleProjectsClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="site-nav-link"
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="site-nav-link"
                  onClick={handleContactClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Shortcuts */}
          <div className="header-actions">
            <a 
              href={PERSONAL_BIO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="header-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href={PERSONAL_BIO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="header-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href={`mailto:${PERSONAL_BIO.contactEmail}`}
              className="header-contact-pill"
              title="Send an email"
            >
              <MailIcon size={14} />
              <span className="contact-text">Say Hello</span>
            </a>

            <button 
              type="button" 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <CloseIcon size={20} color="var(--color-ink)" />
              ) : (
                <MenuIcon size={20} color="var(--color-ink)" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true" 
        />
      )}
    </>
  );
}

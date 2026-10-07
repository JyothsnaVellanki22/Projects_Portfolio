import React from 'react';
import { PERSONAL_BIO } from '../../../domain/models/Bio';
import { GithubIcon, LinkedinIcon } from '../../common/Icons';
import './footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="editorial-footer">
      <div className="container footer-inner">
        <div className="footer-top-row">
          <div className="footer-bio-col">
            <h3 className="footer-headline">Let's build something thoughtful together.</h3>
            <p className="footer-lead" style={{ marginBottom: 0 }}>
              Always open to conversations about engineering roles, AI agent workflows, security analysis, or open-source ideas.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-links-title">Find Me Online</span>
            <div className="footer-social-nav">
              <a 
                href={PERSONAL_BIO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href={PERSONAL_BIO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
            <span style={{ fontSize: '0.84rem', color: 'var(--color-ink-faint)', marginTop: '0.5rem' }}>
              Based in {PERSONAL_BIO.location}
            </span>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>
            © {new Date().getFullYear()} {PERSONAL_BIO.name}. Designed &amp; engineered with React.
          </span>
          <button 
            type="button" 
            onClick={scrollToTop} 
            className="footer-back-top-btn"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

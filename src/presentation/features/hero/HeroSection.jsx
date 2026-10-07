import React, { useState, useRef, useCallback } from 'react';
import { PERSONAL_BIO } from '../../../domain/models/Bio';
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from '../../common/Icons';
import './hero.css';

export default function HeroSection() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 30, active: false });

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y, active: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, active: false }));
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="top" 
      ref={heroRef}
      className="simple-hero-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Background Elements */}
      <div 
        className="hero-spotlight" 
        style={{
          '--spotlight-x': `${mousePos.x}px`,
          '--spotlight-y': `${mousePos.y}px`,
          opacity: mousePos.active ? 1 : 0.65,
        }}
      />
      <div className="hero-grid-pattern" />
      <div className="hero-ambient-orb orb-1" />
      <div className="hero-ambient-orb orb-2" />

      <div className="container hero-container-rel">
        <div className="simple-hero-content">
          {/* Main Headline */}
          <h1 className="hero-main-title animate-hero-2">
            Hi, I’m <span className="hero-title-name">Jyothsna Vellanki</span>.
          </h1>

          {/* Bio Lead */}
          <p className="hero-main-bio animate-hero-3">
            I specialize in bridging modern machine learning models with production-grade software architecture. My work ranges from low-latency phishing classifiers and offline local LLM assistants to real-time AI reflection platforms.
          </p>

          {/* Action Row with Interactive Micro-Interactions */}
          <div className="hero-main-actions animate-hero-5">
            <a 
              href="#projects" 
              className="btn-hero-primary"
              onClick={scrollToProjects}
            >
              <span>Explore Featured Work</span>
              <span className="hero-arrow-down">&darr;</span>
            </a>

            <a 
              href={PERSONAL_BIO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <span className="hero-arrow-shift"><ArrowUpRightIcon size={13} /></span>
            </a>

            <a 
              href={PERSONAL_BIO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <span className="hero-arrow-shift"><ArrowUpRightIcon size={13} /></span>
            </a>
          </div>
        </div>

        {/* Section Header Leading to Featured Work */}
        <div className="featured-section-intro animate-hero-6">
          <div className="featured-eyebrow-line">
            <span className="featured-eyebrow">PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="featured-heading">Featured Projects</h2>
          <p className="featured-subheading">
            Two flagship applications demonstrating full-stack engineering, asynchronous APIs, and applied AI.
          </p>
        </div>
      </div>
    </section>
  );
}

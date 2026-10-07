import React from 'react';
import { PERSONAL_BIO } from '../../../domain/models/Bio';
import './about.css';

export default function AboutSection() {
  const { about } = PERSONAL_BIO;

  return (
    <section id="about" className="about-editorial-wrap">
      <div className="container">
        {/* ===================================================================
            SECTION 1: ENGINEERING PROFILE & AI FOR SECURITY FOCUS
            =================================================================== */}
        <div className="about-header">
          <span className="about-eyebrow">About &amp; Focus</span>
          <h2 className="about-title">{about?.headline || 'AI-Powered Systems & AI for Security'}</h2>
        </div>

        <div className="about-narrative-container">
          <p className="about-narrative-body" style={{ fontSize: 'clamp(1.08rem, 1.35vw, 1.2rem)', color: 'var(--color-ink)', fontWeight: 500 }}>
            {about?.intro || 'I engineer AI-powered software systems and AI for Security — combining software engineering, machine learning, and security to build intelligent, reliable, and production-ready applications.'}
          </p>

          <p className="about-narrative-body">
            {about?.experience || "My work spans RAG and agentic AI systems, full-stack applications, backend APIs, application security, and security-focused automation. Across industry and research environments, I've engineered enterprise AI applications at Coke One North America, built and delivered an AI-powered education platform at Chapter Reading, and worked on cryptographic security and vulnerability analysis at Securium Fox."}
          </p>

          <p className="about-narrative-body">
            My current focus is <strong>AI for Security</strong> — exploring how machine learning, NLP, LLMs, and agentic systems can support threat detection, vulnerability analysis, malicious-content detection, security automation, and intelligent security workflows.
          </p>

          <p className="about-narrative-body">
            {about?.vision || "I'm particularly interested in connecting AI research with practical cybersecurity engineering — moving from models and experiments to security-focused systems that can be evaluated, deployed, and used in real-world environments."}
          </p>
        </div>

        {/* 3-Column Experience Anchor Grid */}
        <div className="about-experience-grid">
          <div className="about-experience-card">
            <span className="about-exp-tag cona">Enterprise AI</span>
            <h3 className="about-exp-title">Coke One North America</h3>
            <span className="about-exp-company">Enterprise Agent Platform &bull; TPO</span>
            <p className="about-exp-desc">
              Engineered enterprise analytics and conversational Agent Platform workflows, integrating Angular micro-frontends with Python services, RAG retrieval, and containerized Linux delivery.
            </p>
          </div>

          <div className="about-experience-card">
            <span className="about-exp-tag chapter">Product Engineering</span>
            <h3 className="about-exp-title">Chapter Reading</h3>
            <span className="about-exp-company">Full-Stack AI Education Platform</span>
            <p className="about-exp-desc">
              Architected and shipped production full-stack web platforms, incorporating embedded AI tools, interactive reading experiences, and automated responsive design.
            </p>
          </div>

          <div className="about-experience-card">
            <span className="about-exp-tag securium">Security Research</span>
            <h3 className="about-exp-title">Securium Fox</h3>
            <span className="about-exp-company">Vulnerability Analysis &bull; Cryptography</span>
            <p className="about-exp-desc">
              Conducted cryptographic vulnerability analysis, audited attack surfaces across distributed systems, and built automated security analysis workflows.
            </p>
          </div>
        </div>

        {/* ===================================================================
            SECTION 2: ENGINEERING PHILOSOPHY / STANDARDS
            =================================================================== */}
        <div id="how-i-work" className="about-header" style={{ marginTop: '4rem' }}>
          <span className="about-eyebrow">Engineering Standards</span>
          <h2 className="about-title">How I Approach Software</h2>
          <p className="about-lead">
            I approach technical problems by understanding the system, data flow, security boundaries, and expected behavior before selecting an implementation.
          </p>
        </div>

        <div className="philosophy-editorial-grid">
          {PERSONAL_BIO.philosophy.map((item, idx) => (
            <div key={idx} className="philosophy-item-card">
              <span className="philosophy-numeral">{item.number}</span>
              <h3 className="philosophy-heading">{item.title}</h3>
              <p className="philosophy-text">{item.summary}</p>
            </div>
          ))}
        </div>

        {/* ===================================================================
            SECTION 3: TECHNICAL PROFICIENCIES MATRIX
            =================================================================== */}
        <div className="skills-editorial-card">
          <h3 className="skills-editorial-title">Core Technical Proficiencies</h3>
          
          <div className="skills-columns-grid">
            <div>
              <h4 className="skill-col-title">Languages</h4>
              <div className="skill-pills-wrap">
                {PERSONAL_BIO.skills.languages.map((skill, i) => (
                  <span key={i} className="skill-pill-item">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="skill-col-title">AI &amp; Machine Learning</h4>
              <div className="skill-pills-wrap">
                {PERSONAL_BIO.skills.aiSystems.map((skill, i) => (
                  <span key={i} className="skill-pill-item">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="skill-col-title">Frameworks &amp; APIs</h4>
              <div className="skill-pills-wrap">
                {PERSONAL_BIO.skills.frameworks.map((skill, i) => (
                  <span key={i} className="skill-pill-item">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="skill-col-title">Persistence &amp; Cloud</h4>
              <div className="skill-pills-wrap">
                {PERSONAL_BIO.skills.platforms.map((skill, i) => (
                  <span key={i} className="skill-pill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

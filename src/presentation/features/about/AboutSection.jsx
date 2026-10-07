import React from 'react';
import { PERSONAL_BIO } from '../../../domain/models/Bio';
import './about.css';

export default function AboutSection() {
  return (
    <section id="how-i-work" className="about-editorial-wrap">
      <div className="container">
        <div className="about-header">
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

        <div id="about" className="skills-editorial-card">
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

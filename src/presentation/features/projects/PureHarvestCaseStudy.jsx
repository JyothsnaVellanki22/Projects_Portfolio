import React from 'react';
import './project-detail.css';

export default function PureHarvestCaseStudy({ 
  project, 
  onBack, 
  allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* ===================================================================
            TOP SUB-NAV & BREADCRUMBS
            =================================================================== */}
        <nav className="case-study-top-nav" aria-label="Project Navigation">
          <button 
            type="button" 
            className="btn-case-study-back" 
            onClick={onBack}
            title="Return to projects list"
          >
            <span>&larr; Back to All Projects</span>
          </button>

          <div className="case-study-breadcrumbs">
            <span>Projects</span>
            <span className="case-study-breadcrumb-sep">/</span>
            <span style={{ textTransform: 'capitalize' }}>Client Work</span>
            <span className="case-study-breadcrumb-sep">/</span>
            <span className="case-study-breadcrumb-active">Pure Harvest</span>
          </div>

          <div className="case-study-nav-links">
            <span className="type-badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontWeight: 600 }}>
              Client Work
            </span>
          </div>
        </nav>

        {/* ===================================================================
            HEADER (Title & Subtitle)
            =================================================================== */}
        <header className="case-study-header">
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="case-study-kicker">CLIENT WORK &bull; AGTECH &bull; DIRECT-TO-CONSUMER PLATFORM</span>
          </div>
          <h1 className="case-study-title">
            Pure Harvest
          </h1>
          <p className="case-study-subtitle">
            Direct-from-farm harvest sponsorship &amp; Rythu empowerment platform
          </p>
        </header>

        {/* ===================================================================
            EXECUTIVE OVERVIEW CALLOUT
            =================================================================== */}
        <div className="problem-statement-callout" style={{ margin: '1.5rem 0 2.25rem' }}>
          <span className="problem-statement-badge">MISSION OVERVIEW</span>
          <p className="problem-statement-text" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
            <strong>Sponsor a Harvest, Empower a Farmer.</strong> PureHarvest connects consumers directly with regional farmers across Andhra Pradesh and Telangana. By skipping layers of traditional middlemen, consumers support regional agriculture and receive fresh seasonal crops at their doorstep, while farmers secure reliable upfront seasonal sponsorship.
          </p>
          <p className="problem-statement-text" style={{ fontSize: '0.96rem', marginTop: '0.85rem', color: 'var(--color-ink-muted)' }}>
            The platform combines a public consumer experience for farm browsing and crop batch sponsorship with a dedicated <strong>Rythu Dashboard</strong> where farmers manage active subscription plans, track monthly revenues, and broadcast real-time harvest milestones to their sponsors.
          </p>
        </div>

        {/* ===================================================================
            PROJECT AT A GLANCE TABLE
            =================================================================== */}
        <section className="case-study-section" aria-label="Project at a glance">
          <h3 className="case-study-h3" style={{ marginBottom: '1rem' }}>Project at a Glance</h3>
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '28%' }}>Area</th>
                  <th style={{ width: '72%' }}>Platform Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Client</strong></td>
                  <td>Pure Harvest</td>
                </tr>
                <tr>
                  <td><strong>Platform Type</strong></td>
                  <td>Dual-Sided Web Application: Consumer Sponsorship Portal &amp; Farmer (Rythu) Operations Workstation</td>
                </tr>
                <tr>
                  <td><strong>Target Region</strong></td>
                  <td>Andhra Pradesh &amp; Telangana (Guntur, Krishna Valley, Nizamabad, Banganapalle)</td>
                </tr>
                <tr>
                  <td><strong>Core Value Proposition</strong></td>
                  <td>Direct-from-farm batch pre-orders eliminating intermediaries; predictable seasonal cash flow for growers</td>
                </tr>
                <tr>
                  <td><strong>Technology Stack</strong></td>
                  <td>React, JavaScript, Python, FastAPI, PostgreSQL, RESTful APIs, CSS3 Design System</td>
                </tr>
                <tr>
                  <td><strong>Key Modules</strong></td>
                  <td>Browse Farms Explorer, About Us / Mission Hub, Rythu Management Dashboard, Crop Timeline Updates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            PRIMARY HERO MEDIA FRAME
            =================================================================== */}
        <div className="case-study-media-frame" style={{ margin: '2.5rem 0 3.5rem', background: '#0c4a24', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid #166534' }}>
          <img 
            src="/assets/projects/pure_harvest_hero.png" 
            alt="Pure Harvest Homepage Hero - Sponsor a Harvest, Empower a Farmer" 
            className="case-study-media-img"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.88rem', color: '#bbf7d0', fontWeight: 500 }}>
              Consumer Portal: Farm Exploration &amp; Direct Harvest Sponsorship Workflow
            </span>
            <span style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', fontWeight: 600 }}>
              Production Experience
            </span>
          </div>
        </div>

        {/* ===================================================================
            SECTION 1: THE MISSION & PROBLEM IN DECCAN AGRICULTURE
            =================================================================== */}
        <section className="case-study-section" aria-label="Mission and problem">
          <h3 className="case-study-h3">1. Mission: Empowering the Rythu, Nourishing the People</h3>
          <p className="case-study-paragraph">
            From the fertile chili fields of Guntur to the golden paddy terraces of Krishna Valley, the Deccan plateau has historically served as a fertile granary. However, modern agricultural distribution layers impose multiple tiers of commission agents, brokers, and logistics intermediaries between rural cultivators and metropolitan dining tables.
          </p>
          <p className="case-study-paragraph">
            This fragmented supply chain depresses farmer incomes during market gluts while delivering weeks-old, chemically preserved produce to urban households. PureHarvest restructures this relationship through transparent, upfront crop sponsorship contracts.
          </p>

          {/* Mission Panorama Screenshot */}
          <div className="case-study-media-frame" style={{ margin: '2rem 0 2.5rem', background: '#1c1917', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--color-border)' }}>
            <img 
              src="/assets/projects/pure_harvest_mission.png" 
              alt="PureHarvest Mission: Empowering the Rythu, Nourishing the People" 
              className="case-study-media-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
            />
            <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-muted)', marginTop: '0.75rem', marginBottom: 0, textAlign: 'center' }}>
              <strong>Platform Mission:</strong> Building a direct bridge between the vibrant fields of Andhra Pradesh &amp; Telangana and household dinner tables.
            </p>
          </div>

          <div className="research-takeaways-grid" style={{ margin: '2rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Middleman Elimination</span>
              <p className="takeaway-pill-text">
                Direct peer-to-peer crop allocation passes 80%+ of consumer spend directly to the cultivating farmer rather than multi-tier wholesale traders.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Predictable Working Capital</span>
              <p className="takeaway-pill-text">
                Upfront seasonal sponsorships provide farmers with the liquidity necessary for seeds, organic fertilizers, and sustainable cultivation without high-interest informal loans.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Doorstep Traceability</span>
              <p className="takeaway-pill-text">
                Consumers know the exact farm, village, and grower responsible for their harvest batch, accompanied by real-time lifecycle updates from field to doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: RECLAIMING THE GLORY OF DECCAN AGRICULTURE
            =================================================================== */}
        <section className="case-study-section" aria-label="Story and regional crops">
          <h3 className="case-study-h3">2. Reclaiming the Glory of Deccan Agriculture</h3>
          <p className="case-study-paragraph">
            PureHarvest was conceived in Hyderabad with a focused purpose: to guarantee that food cultivated with intense physical labor and generational expertise reaches families completely untainted.
          </p>

          {/* Story & Hand-Harvest Screenshot */}
          <div className="case-study-media-frame" style={{ margin: '2rem 0 2.5rem', background: '#fafaf9', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--color-border)' }}>
            <img 
              src="/assets/projects/pure_harvest_story.png" 
              alt="The PureHarvest Story - Reclaiming the Glory of Deccan Agriculture" 
              className="case-study-media-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
            />
            <div style={{ padding: '1rem 0.5rem 0.25rem' }}>
              <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#166534', fontWeight: 600, fontSize: '0.98rem' }}>
                &ldquo;We're not just selling crops; we're preserving a culture and empowering those who feed us.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.5rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Regional Specialty</th>
                  <th style={{ width: '35%' }}>Origin Region</th>
                  <th style={{ width: '35%' }}>Sponsorship Model</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Premium Red Chili</strong></td>
                  <td>Guntur District, Andhra Pradesh</td>
                  <td>Sun-dried batch pre-orders with moisture-level updates</td>
                </tr>
                <tr>
                  <td><strong>Heritage Krishna Paddy</strong></td>
                  <td>Krishna Valley, Andhra Pradesh</td>
                  <td>Acreage sponsorship yielding seasonal aged rice distribution</td>
                </tr>
                <tr>
                  <td><strong>High-Curcumin Turmeric</strong></td>
                  <td>Nizamabad, Telangana</td>
                  <td>Organic rhizome batch processing and stone-ground delivery</td>
                </tr>
                <tr>
                  <td><strong>Banganapalle Mangoes</strong></td>
                  <td>Kurnool &amp; Coastal AP</td>
                  <td>Tree adoption with tree-ripened seasonal crate dispatch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: RYTHU DASHBOARD - PRODUCER WORKSTATION
            =================================================================== */}
        <section className="case-study-section" aria-label="Rythu Dashboard">
          <h3 className="case-study-h3">3. The Rythu Dashboard: Operational &amp; Revenue Telemetry</h3>
          <p className="case-study-paragraph">
            The core engineering contribution on the operational side is the <strong>Rythu Dashboard</strong>. Cultivators are equipped with an intuitive, high-contrast control panel to manage their seasonal harvest quotas, track recurring sponsorship cash flows, and maintain subscriber communication.
          </p>

          {/* Rythu Dashboard Screenshot */}
          <div className="case-study-media-frame" style={{ margin: '2rem 0 2.75rem', background: '#f8fafc', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid #cbd5e1' }}>
            <img 
              src="/assets/projects/pure_harvest_rythu_dashboard.png" 
              alt="Rythu Dashboard - Farm Analytics, Active Harvest Plans, and Subscriber Updates" 
              className="case-study-media-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '0.65rem' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-ink)', fontWeight: 600 }}>
                Rythu Operations Console: Financial Metrics, Harvest Quotas &amp; Direct Broadcast Feed
              </span>
              <span style={{ fontSize: '0.78rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: '#10b981', color: '#ffffff', fontWeight: 600 }}>
                Live Dashboard UI
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
              Real-Time Operational Indicators
            </h4>
            <div className="research-takeaways-grid">
              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">284 Total Subscribers (+15%)</span>
                <p className="takeaway-pill-text">
                  Direct patron count supporting farm operations across active seasonal crop cycles.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">₹4,12,500 Monthly Revenue (+12%)</span>
                <p className="takeaway-pill-text">
                  Guaranteed recurring inflow deposited directly to the farmer without middleman deductions.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">8 Active Plans &bull; 42 Deliveries</span>
                <p className="takeaway-pill-text">
                  Real-time visibility into active farm batches and immediate logistical dispatch obligations.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.18rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
              Active Harvest Plans &amp; Live Broadcast Feed
            </h4>
            <p className="case-study-paragraph">
              Farmers can define tiered sponsorship batches with explicit subscriber caps and pricing structures:
            </p>
            <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--color-ink-muted)', marginBottom: '1.5rem' }}>
              <li><strong>Premium Red Chili Plan:</strong> 76 / 80 Subscribers enrolled at ₹16,999 per season (Active).</li>
              <li><strong>Paddy Harvest Sponsorship:</strong> 28 / 30 Subscribers enrolled at ₹5,999 per season (Active).</li>
              <li><strong>Organic Turmeric Batch:</strong> 50 / 50 Subscribers reached capacity at ₹2,499 per season (Sold Out).</li>
            </ul>
            <p className="case-study-paragraph">
              Through the <strong>Subscriber Updates feed</strong>, farmers post milestones directly into the sponsor portal—including notifications like <em>&ldquo;Chili Drying Process Started&rdquo;</em> or <em>&ldquo;Turmeric Batch 04 Update&rdquo;</em>—creating unprecedented transparency into the agricultural timeline.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: ARCHITECTURE & RELATIONAL DATA MODEL
            =================================================================== */}
        <section className="case-study-section" aria-label="System architecture">
          <h3 className="case-study-h3">4. Platform Architecture &amp; Data Relationships</h3>
          <p className="case-study-paragraph">
            The platform architecture decouples consumer-facing browsing from producer dashboard state, guaranteeing fast response times during harvest launch windows:
          </p>

          <div className="case-study-table-wrapper" style={{ margin: '1.5rem 0' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>System Layer</th>
                  <th style={{ width: '35%' }}>Technology</th>
                  <th style={{ width: '40%' }}>Core Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Consumer Client</strong></td>
                  <td>React, Vite, Responsive CSS</td>
                  <td>Browse farms, regional harvest filtering, batch sponsorship checkout, and status tracking.</td>
                </tr>
                <tr>
                  <td><strong>Rythu Portal</strong></td>
                  <td>React Dashboard Components</td>
                  <td>Producer dashboard, subscriber capacity indicators, batch management, and update broadcasting.</td>
                </tr>
                <tr>
                  <td><strong>Backend API</strong></td>
                  <td>Python FastAPI Microservices</td>
                  <td>REST endpoints handling subscriber quotas, plan enrollment, farmer auth, and update event streams.</td>
                </tr>
                <tr>
                  <td><strong>Database</strong></td>
                  <td>PostgreSQL Relational Schema</td>
                  <td>Entities mapping Farmers, Farms, Harvest Plans, Subscribers, Payments, and Lifecycle Broadcasts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: KEY TAKEAWAYS & IMPACT
            =================================================================== */}
        <section className="case-study-section" aria-label="Takeaways and impact">
          <h3 className="case-study-h3">5. Impact &amp; Engineering Lessons</h3>
          <div className="contribution-grid">
            <div className="contribution-card">
              <span className="contribution-num">01</span>
              <h4 className="contribution-title">Producer-First UX Simplicity</h4>
              <p className="contribution-desc">
                Building software for agricultural producers requires high-contrast typography, minimal operational friction, and instant glanceable revenue metrics that don't bury farmers under complex accounting jargon.
              </p>
            </div>

            <div className="contribution-card">
              <span className="contribution-num">02</span>
              <h4 className="contribution-title">Direct-to-Consumer Trust Loop</h4>
              <p className="contribution-desc">
                Pairing financial sponsorship with a real-time progress broadcast feed turns passive grocery shopping into an engaging partnership between urban families and rural farmers.
              </p>
            </div>

            <div className="contribution-card">
              <span className="contribution-num">03</span>
              <h4 className="contribution-title">Predictable Seasonal Liquidity</h4>
              <p className="contribution-desc">
                Batch subscription economics protect growers against predatory harvest-time price collapses, establishing a sustainable blueprint for regional Indian agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BOTTOM ACTIONS
            =================================================================== */}
        <div className="case-study-bottom-bar">
          <div className="case-study-action-buttons">
            <span style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)' }}>
              Client Work &bull; Pure Harvest
            </span>
          </div>

          <button 
            type="button" 
            className="btn-case-study-back" 
            onClick={onBack}
            style={{ margin: 0 }}
          >
            <span>&larr; Back to All Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}

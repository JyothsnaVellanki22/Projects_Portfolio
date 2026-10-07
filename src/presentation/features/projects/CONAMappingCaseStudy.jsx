import React from 'react';
import { CaseStudyNav, CaseStudyCallout, CaseStudyBottomBar } from './components/CaseStudyCommon';
import './project-detail.css';

export default function CONAMappingCaseStudy({ 
  project, 
  onBack, 
  allProjects = [], 
  onSelectProject 
}) {
  if (!project) return null;

  const navigateToParentTPO = () => {
    const tpoProject = allProjects.find((p) => p.id === 'tpo-platform');
    if (tpoProject && onSelectProject) {
      onSelectProject(tpoProject);
    }
  };

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* Top Navigation */}
        <CaseStudyNav project={project} onBack={onBack} />

        {/* CASE STUDY TITLE & TAGLINE */}
        <header className="case-study-header">
          <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            <span className="case-study-kicker">CONA INNOVATION TEAM &bull; TPO INTEGRATION</span>
          </div>
          <h1 className="case-study-title">
            CONA Mapping Tool
          </h1>
          <p className="case-study-subtitle">
            A geographic view of trade promotion performance
          </p>
        </header>

        {/* EXECUTIVE SUMMARY CALLOUT */}
        <CaseStudyCallout 
          badge="INTERNSHIP • SUMMER 2025 • JYOTHSNA VELLANKI"
          calloutStyle={{ margin: '1.5rem 0 2.25rem' }}
        >
          <p className="problem-statement-text" style={{ fontSize: '1.02rem', lineHeight: '1.75' }}>
            During my internship with the <strong>CONA Innovation Team</strong>, I developed a mapping feature for the <strong>Trade Promotion Optimization (TPO)</strong> application. The goal was to help bottlers explore Census Trade Areas, counties, retailers, and key sales metrics through an interactive geographic interface.
          </p>
          <p className="problem-statement-text" style={{ fontSize: '0.96rem', marginTop: '0.85rem', color: 'var(--color-ink-muted)' }}>
            Trade Promotion Optimization (TPO) focuses on making trade spend more effective and efficient. In this project, a Census Trade Area (CTA) identifies a designated geographic region. The mapping tool connects those regions with business data so users can examine where activity is happening and drill into the retailers associated with a county.
          </p>
        </CaseStudyCallout>

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
                  <th style={{ width: '72%' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Users</strong></td>
                  <td>Bottlers exploring CTA, county, and retailer coverage</td>
                </tr>
                <tr>
                  <td><strong>Metrics</strong></td>
                  <td>Volume, Net Revenue, and Cost of Goods Sold (COGS)</td>
                </tr>
                <tr>
                  <td><strong>Stack</strong></td>
                  <td>Angular frontend, Flask API, PostgreSQL, and Databricks</td>
                </tr>
                <tr>
                  <td><strong>Delivery</strong></td>
                  <td>Approximately ten weeks of internship development (Summer 2025)</td>
                </tr>
                <tr>
                  <td><strong>Status in Presentation</strong></td>
                  <td>Local development feature; QA integration and scheduled refresh remained next steps</td>
                </tr>
                <tr>
                  <td><strong>Integration Target</strong></td>
                  <td>Trade Promotion Optimization (TPO) Application (Volume Decomposition section)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)', fontStyle: 'italic', marginTop: '0.75rem', lineHeight: '1.6' }}>
            Source basis: CONA internship presentation, especially slides 5, 7, 9–18, and 22. Framework rationale explains how the documented choices fit the project; it is not a record of a formal technology comparison.
          </p>
        </section>

        {/* ===================================================================
            SECTION 1: THE PROBLEM & MY CONTRIBUTION
            =================================================================== */}
        <section className="case-study-section" aria-label="The problem and contribution">
          <h3 className="case-study-h3">1. The Problem and Core Contribution</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              The Problem: Disconnect Between Spatial Coverage and Performance
            </h4>
            <p className="case-study-paragraph">
              Bottlers needed to understand geographic coverage alongside performance. A tabular report can show volume, net revenue, and cost of goods sold, but it does not directly show the location of a county or how regional coverage is distributed.
            </p>
            <p className="case-study-paragraph">
              The project addressed that gap by combining an interactive map with a structured KPI table and county-level detail views. This lets decision-makers immediately bridge spatial intuition with rigorous financial data.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              My Contribution Across the Full Stack
            </h4>
            <p className="case-study-paragraph">
              My work covered the relational database setup, Flask API development, API endpoint consolidation, integration of the standalone mapping module into the parent TPO application, updates for changing datasets, and filter and popup dialog components. This connected backend data access with the frontend exploration experience.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: ARCHITECTURE & FRAMEWORK CHOICES
            =================================================================== */}
        <section className="case-study-section" aria-label="Architecture and framework choices">
          <h3 className="case-study-h3">2. Architecture and Framework Choices</h3>
          <p className="case-study-paragraph">
            The data pipeline flows cleanly from enterprise storage down to the user's browser:
          </p>

          <div style={{ margin: '1.5rem 0', padding: '1rem 1.5rem', background: 'var(--color-canvas-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', textAlign: 'center', fontFamily: 'var(--font-mono, monospace)', fontSize: '0.94rem', fontWeight: 600, color: 'var(--color-ink)' }}>
            Databricks &rarr; PostgreSQL &rarr; Flask API (/api/cta) &rarr; Angular Frontend
          </div>

          <div className="case-study-table-wrapper" style={{ margin: '1.5rem 0 2rem' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Layer</th>
                  <th style={{ width: '40%' }}>Purpose in the Tool</th>
                  <th style={{ width: '38%' }}>Why it Fits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Databricks</strong></td>
                  <td>Upstream datasets in the documented pipeline.</td>
                  <td>Keeps the mapping feature connected to an existing enterprise data environment rather than making the browser prepare raw business datasets.</td>
                </tr>
                <tr>
                  <td><strong>PostgreSQL</strong></td>
                  <td>Stores county boundaries, CTA details, and county-to-retailer mappings.</td>
                  <td>Relational tables naturally model the links between geographic areas, business entities, and financial metrics.</td>
                </tr>
                <tr>
                  <td><strong>Flask</strong></td>
                  <td>Exposes database-backed HTTP endpoints.</td>
                  <td>A focused API surface implemented with lightweight Python data handling and rapid route definition.</td>
                </tr>
                <tr>
                  <td><strong>Angular</strong></td>
                  <td>Hosts the map, table, filters, and detail dialog components.</td>
                  <td>Component structure cleanly separates map and modal interactions while matching the architecture of the parent TPO app.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Why Flask for this Project
            </h4>
            <p className="case-study-paragraph">
              The backend needed to retrieve and combine structured data, then return it to a frontend. Flask was a practical fit for that focused responsibility: it allowed the API to start with a small number of GET routes and evolve as the required data changed. The presentation records iterations to <code>app.py</code> and <code>scripts.py</code> when source datasets were refreshed.
            </p>
            <p className="case-study-paragraph">
              Flask’s small core leaves enterprise concerns to the surrounding infrastructure. Authentication, deployment settings, caching, and connection pooling would require explicit configuration in production; the case study strictly documents features confirmed in the presentation.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Why a Relational Database and Component Frontend
            </h4>
            <p className="case-study-paragraph">
              PostgreSQL provides a clear way to represent entities and their relationships, which matters when selecting a county needs to lead to the correct retailers and CTA metrics. Angular supports the user interface as reusable components (such as the documented filter dialog). Compatibility with the parent TPO application was also a practical constraint when moving the standalone feature into the larger codebase.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: DATA MODEL AND API DESIGN
            =================================================================== */}
        <section className="case-study-section" aria-label="Data model and API design">
          <h3 className="case-study-h3">3. Data Model and API Design</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Organizing Geographic and Business Data
            </h4>
            <p className="case-study-paragraph">
              The database work began while bottler requirements were still evolving. I initialized a relational structure that could support the first mapping experience and be enhanced as requirements clarified. The implementation organized three core tables alongside the import of structured JSON containing county boundary geometry:
            </p>

            <div className="case-study-table-wrapper" style={{ margin: '1.25rem 0 1.75rem' }}>
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Table</th>
                    <th style={{ width: '68%' }}>Documented Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>counties</code></td>
                    <td>Geographic and administrative information for US counties (GeoJSON boundaries).</td>
                  </tr>
                  <tr>
                    <td><code>county_retailer_mapping</code></td>
                    <td>Relationships and associations between retail accounts and counties.</td>
                  </tr>
                  <tr>
                    <td><code>cta_details</code></td>
                    <td>Census Trade Area performance metrics (Volume, Net Revenue, COGS) and metadata.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="case-study-paragraph">
              Conceptually, this cleanly decouples an area’s geographic geometry from its commercial retailer associations and CTA metrics. A county interaction can then bring together its boundary, business coverage, and financial metrics in real time.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Consolidating Requests into /api/cta
            </h4>
            <p className="case-study-paragraph">
              I initially created three distinct Flask GET endpoints, validated via Postman:
            </p>
            <ul className="meta-strip-list" style={{ margin: '0.85rem 0 1.25rem' }}>
              <li><code>/api/geojson/counties</code> &mdash; County geographic boundary data</li>
              <li><code>/api/csv/county_retailer_mapping</code> &mdash; County and retailer associations</li>
              <li><code>/api/csv/cta_counties</code> &mdash; CTA and county summary information</li>
            </ul>

            <div className="problem-statement-callout" style={{ margin: '1.5rem 0' }}>
              <span className="problem-statement-badge">PERFORMANCE OPTIMIZATION</span>
              <h4 className="problem-statement-title">From Three Network Requests to Single Consolidated /api/cta</h4>
              <p className="problem-statement-text">
                The initial multi-request pattern produced network coordination bottlenecks on the client. To eliminate unnecessary latency, I consolidated the three routes into a unified <code>/api/cta</code> endpoint. This reduced round-trip network overhead, eliminated frontend synchronization logic, and provided a single backend assembly point for the view.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: EXPLORING REGIONS THROUGH THE MAP
            =================================================================== */}
        <section className="case-study-section" aria-label="Exploring regions through the map">
          <h3 className="case-study-h3">4. Exploring Regions Through the Map</h3>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem', background: '#0f172a', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--color-border)' }}>
            <img 
              src="/assets/projects/cona_mapping_interface.png" 
              alt="CONA CTA Mapping Tool Interactive Map and Summary KPI Interface" 
              className="case-study-media-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                Main Mapping Interface: Census Trade Area KPI table paired with interactive US county polygon choropleth.
              </span>
              <span style={{ fontSize: '0.74rem', padding: '0.2rem 0.55rem', borderRadius: '9999px', background: 'rgba(148, 163, 184, 0.15)', color: '#94a3b8', border: '1px solid rgba(148, 163, 184, 0.3)', fontWeight: 600 }}>
                Enterprise Data Privacy Protected &bull; Sensitive Values Masked
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              What Users Can Inspect
            </h4>
            <p className="case-study-paragraph">
              The main interface pairs a CTA summary table with an interactive map of US counties. The table displays counts of bottlers, counties, and retailers alongside <strong>Volume</strong>, <strong>Net Revenue</strong>, and <strong>Cost of Goods Sold (COGS)</strong>. The table includes text search filtering, pagination, and sorting on financial columns. Hovering over a map county triggers a contextual tooltip summarizing retailer counts and revenue figures.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Why Table and Map Work Together
            </h4>
            <p className="case-study-paragraph">
              A map is intuitive for understanding spatial coverage and geographic dispersion, while a tabular view is essential for exact numerical comparisons. Keeping them synchronized in one unified interface allows bottlers to seamlessly toggle between high-level regional analysis and granular metrics.
            </p>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Dynamic Filtering Dialog Component
            </h4>
            <p className="case-study-paragraph">
              In weeks seven and eight, I implemented an Angular dialog component for dynamic filtering and CTA inspection. This enabled bottlers to isolate specific bottler territories or performance thresholds as datasets evolved.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: DRILLING INTO COUNTY PERFORMANCE
            =================================================================== */}
        <section className="case-study-section" aria-label="Drilling into county performance">
          <h3 className="case-study-h3">5. Drilling into County Performance</h3>
          <p className="case-study-paragraph">
            The county detail popup brings the user from regional macro-trends directly into store-level commercial realities. In the presentation demonstration (slide 18), selecting <strong>MAURY County</strong> opens an overlay presenting summary financial metrics alongside an itemized table of retail accounts grouped under the servicing bottler.
          </p>

          <div className="case-study-media-frame" style={{ margin: '1.75rem 0 2.25rem', background: '#0f172a', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--color-border)' }}>
            <img 
              src="/assets/projects/cona_mapping_drilldown.png" 
              alt="CONA CTA Mapping Tool MAURY County Detail Drilldown Modal" 
              className="case-study-media-img"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-sm)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                County Detail Dialog: MAURY County drill-down showing servicing bottler, retailer accounts, and volume breakdowns.
              </span>
              <span style={{ fontSize: '0.74rem', padding: '0.2rem 0.55rem', borderRadius: '9999px', background: 'rgba(148, 163, 184, 0.15)', color: '#94a3b8', border: '1px solid rgba(148, 163, 184, 0.3)', fontWeight: 600 }}>
                Enterprise Data Privacy Protected &bull; Sensitive Values Masked
              </span>
            </div>
          </div>

          <div style={{ margin: '1.75rem 0' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.85rem' }}>
              Representative User Journey
            </h4>
            <div className="research-takeaways-grid">
              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">1. Review CTA Summary</span>
                <p className="takeaway-pill-text">
                  Examine macro CTA coverage and high-level Volume, Net Revenue, and COGS across the summary KPI table.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">2. Geographic Inspection</span>
                <p className="takeaway-pill-text">
                  Locate the territory on the map and hover over counties to inspect regional boundaries and tooltip metrics.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">3. County Retailer Drilldown</span>
                <p className="takeaway-pill-text">
                  Click to open the county detail modal, displaying the assigned bottler and itemized retailer accounts.
                </p>
              </div>

              <div className="takeaway-pill-card">
                <span className="takeaway-pill-title">4. Compare &amp; Filter</span>
                <p className="takeaway-pill-text">
                  Analyze store-level volume distribution, compare against neighboring counties, or refine active filters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: DEVELOPMENT AND APPLICATION INTEGRATION
            =================================================================== */}
        <section className="case-study-section" aria-label="Development and application integration">
          <h3 className="case-study-h3">6. Development Chronology &amp; Application Integration</h3>
          <p className="case-study-paragraph">
            The feature was developed over approximately ten weeks during the Summer 2025 internship:
          </p>

          <div className="case-study-table-wrapper" style={{ margin: '1.5rem 0 2rem' }}>
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '18%' }}>Period</th>
                  <th style={{ width: '42%' }}>Work Completed</th>
                  <th style={{ width: '40%' }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Weeks 1–2</strong></td>
                  <td>Learned REST APIs and the CONA enterprise ecosystem.</td>
                  <td>Built the technical foundation for working within the existing application and data environment.</td>
                </tr>
                <tr>
                  <td><strong>Week 3</strong></td>
                  <td>Initialized relational database; imported structured JSON and county boundaries.</td>
                  <td>Connected geographic spatial data with commercial retailer and CTA information.</td>
                </tr>
                <tr>
                  <td><strong>Week 4</strong></td>
                  <td>Built Flask GET endpoints; validated data integrity with Postman.</td>
                  <td>Made database information available over HTTP to the frontend.</td>
                </tr>
                <tr>
                  <td><strong>Week 5</strong></td>
                  <td>Consolidated the three initial endpoints into <code>/api/cta</code>.</td>
                  <td>Reduced request overhead and simplified frontend state orchestration.</td>
                </tr>
                <tr>
                  <td><strong>Week 6</strong></td>
                  <td>Migrated <code>TPO_CTA_MAP</code> module into parent <code>TPO_APP</code>.</td>
                  <td>Moved the standalone feature toward integration in the parent product (Volume Decomposition section).</td>
                </tr>
                <tr>
                  <td><strong>Weeks 7–8</strong></td>
                  <td>Updated <code>app.py</code> and <code>scripts.py</code> for new datasets; built filter and popup dialog components.</td>
                  <td>Adapted data connectivity and expanded the exploratory user experience.</td>
                </tr>
                <tr>
                  <td><strong>Weeks 9–10</strong></td>
                  <td>Focused on UI and UX considerations, responsive layouts, and accessibility.</td>
                  <td>Polished visual styling, keyboard navigability, and presentation readiness.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Integration into the Parent TPO Application
            </h4>
            <p className="case-study-paragraph">
              A major milestone was migrating the mapping files from the standalone project into the enterprise TPO codebase (<code>TPO_APP</code>). The target destination was the <strong>Volume Decomposition</strong> section, enabling geographic exploration to sit naturally alongside analytical promotional spend workflows.
            </p>
            <div style={{ marginTop: '0.85rem' }}>
              <button
                type="button"
                className="btn-case-study-back"
                onClick={navigateToParentTPO}
                style={{ padding: '0.5rem 1.15rem', fontSize: '0.86rem', backgroundColor: 'var(--color-canvas)', color: 'var(--color-ink)', borderColor: 'var(--color-border)', cursor: 'pointer' }}
              >
                <span>View Parent TPO Platform Architecture &rarr;</span>
              </button>
            </div>
          </div>

          <div style={{ marginTop: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Handling Changing Requirements
            </h4>
            <p className="case-study-paragraph">
              Initial requirements were exploratory, and input datasets evolved throughout the summer. I established a flexible relational schema and maintained modular Python scripts (<code>scripts.py</code>) to re-ingest and adapt schema definitions without disrupting frontend component contracts.
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: OUTCOMES AND NEXT STEPS
            =================================================================== */}
        <section className="case-study-section" aria-label="Outcomes and next steps">
          <h3 className="case-study-h3">7. Outcomes, Learnings, and Next Steps</h3>

          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              What the Project Delivered
            </h4>
            <p className="case-study-paragraph">
              The internship produced a demonstrated mapping feature that connects geographic context with CTA business performance. Key deliverables included a relational PostgreSQL data foundation, Flask REST endpoints, a consolidated data retrieval route, an Angular map and KPI table, county drilldown modals, and migration into the parent TPO application.
            </p>
          </div>

          <div className="research-takeaways-grid" style={{ margin: '1.75rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Planned Data Refresh</span>
              <p className="takeaway-pill-text">
                Implement a scheduled cron job to automate database ingestion from Databricks, eliminating manual data scripts and keeping metrics aligned with upstream releases.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Geographic Expansion</span>
              <p className="takeaway-pill-text">
                Extend the mapping engine beyond US county boundaries to support international bottler territories with localized geographic boundary shapes and identifiers.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">QA Integration &amp; Rollout</span>
              <p className="takeaway-pill-text">
                Deploy the integrated module from local development to the enterprise QA environment, validating metric reconciliation across bottler accounts.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Performance Profiling</span>
              <p className="takeaway-pill-text">
                Benchmark network latency and payload size of the consolidated <code>/api/cta</code> endpoint under varied network conditions to optimize payload compression.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Key Internship Learnings
            </h4>
            <p className="case-study-paragraph">
              This project deepened my technical proficiency in REST API design, relational data modeling in PostgreSQL, component architecture in Angular, and enterprise application integration. It reinforced how commercial value relies on tight alignment across the full stack: spatial visualization is only as reliable as the underlying data associations and network contracts that support it.
            </p>
          </div>
        </section>

        {/* BOTTOM ACTIONS */}
        <CaseStudyBottomBar 
          project={project} 
          onBack={onBack} 
          metaLabel="CONA Innovation Team • Summer 2025 Internship" 
        />
      </div>
    </div>
  );
}

import React from 'react';
import { CaseStudyNav, CaseStudyBottomBar } from './components/CaseStudyCommon';
import './project-detail.css';

export default function ScamDetectorCaseStudy({ 
  project, 
  onBack 
}) {
  if (!project) return null;

  return (
    <div className="case-study-page-wrap">
      <div className="container case-study-container">
        {/* TOP SUB-NAV & BREADCRUMBS */}
        <CaseStudyNav project={project} onBack={onBack} />

        {/* ===================================================================
            CASE STUDY TITLE
            =================================================================== */}
        <header className="case-study-header">
          <h1 className="case-study-title">
            Spam Mail Detector
          </h1>
          <p className="case-study-subtitle">
            Turning a Lightweight Text Classifier into a Practical Spam Detection Application
          </p>
        </header>

        {/* ===================================================================
            PROJECT METADATA STRIP (Clean Editorial Layout)
            =================================================================== */}
        <section className="case-study-meta-strip" aria-label="Project Metadata">
          <div className="meta-strip-col">
            <span className="meta-strip-label">Project Type &amp; Dataset</span>
            <p className="meta-strip-text">
              <strong>Single-Purpose ML Application</strong>
              <br />
              Classifying pasted message text
              <br />
              <span style={{ fontSize: '0.88rem', color: 'var(--color-ink-faint)' }}>
                Dataset: UCI SMS Spam Collection (5,572 records)
              </span>
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Target Audience</span>
            <p className="meta-strip-text">
              People checking suspicious messages, and developers exploring applied text classification and model-serving architectures.
            </p>
          </div>

          <div className="meta-strip-col">
            <span className="meta-strip-label">Implementation Scope</span>
            <ul className="meta-strip-list">
              <li>Data loading &amp; text normalization</li>
              <li>TF-IDF &amp; Multinomial Naive Bayes pipeline</li>
              <li>Model persistence via Joblib</li>
              <li>FastAPI REST inference microservice</li>
              <li>Angular 17 standalone component interface</li>
            </ul>
          </div>
        </section>

        {/* ===================================================================
            SECTION 1: ABOUT THE PROJECT
            =================================================================== */}
        <section className="case-study-section" aria-label="About the project">
          <div className="case-study-about-grid">
            <div className="case-study-media-frame">
              <img 
                src="/assets/projects/scam_detector.png" 
                alt="Smart Spam Detection Application Interface" 
                className="case-study-media-img"
              />
            </div>

            <div className="case-study-content-block">
              <h3 className="case-study-h3">1. About the Project</h3>
              <p className="case-study-paragraph">
                <strong>ScamMailDetector</strong> gives users a straightforward way to paste message content and receive a spam or ham classification. "Ham" is the dataset's label for a legitimate message. The interface also displays a model confidence score, making the output more informative than a binary result alone.
              </p>
              <p className="case-study-paragraph">
                The project connects three distinct responsibilities: an Angular interface collects the message, a FastAPI endpoint handles the request, and a saved scikit-learn pipeline transforms the text into numerical features and predicts its class. The core engineering work is making these parts behave consistently across training, inference, and presentation.
              </p>
              <p className="case-study-paragraph" style={{ color: 'var(--color-ink-faint)', fontSize: '0.92rem' }}>
                <em>Scope Note:</em> Although the repository name references scams and the UI accepts email or SMS content, the training data consists of SMS messages. The implemented capability is therefore an SMS-trained text spam classifier. It does not establish whether an email sender is authentic, whether a link is malicious, or whether a message is safe to act on.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: PROJECT BRIEF & GOALS
            =================================================================== */}
        <section className="case-study-section" aria-label="Project brief and goals">
          <div className="case-study-brief-grid">
            <div className="case-study-brief-heading-col">
              <div className="case-study-divider-line"></div>
              <h3 className="case-study-h3">2. Project Brief &amp; Goals</h3>
            </div>

            <div className="case-study-brief-content-col">
              <p className="case-study-paragraph">
                The product problem is simple: a user receives a suspicious message and wants a quick initial assessment without configuring an inbox integration or navigating a complex security dashboard. The technical problem is to turn an offline machine learning model into an application that accepts new text and returns a predictable response.
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-ink)', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                The implementation supports four practical goals:
              </h4>
              <ol className="case-study-goals-list">
                <li>
                  <strong>Train a reproducible baseline:</strong> Normalize text and train a classic text classification pipeline on a public labeled corpus.
                </li>
                <li>
                  <strong>Expose via a lightweight HTTP API:</strong> Wrap the serialized model artifact in a typed, validated FastAPI endpoint.
                </li>
                <li>
                  <strong>Provide a clear input-to-result workflow:</strong> Design an intuitive user experience with real-time feedback and clear confidence scoring.
                </li>
                <li>
                  <strong>Maintain local simplicity:</strong> Keep the system small enough to understand, run, and maintain without database bloat or third-party inference costs.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: DEVELOPMENT PROCESS (Data to Application)
            =================================================================== */}
        <section className="case-study-section" aria-label="Development Process">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">3. Development Process: From Data to Application</h2>
            <p className="case-study-paragraph" style={{ marginTop: '0.5rem' }}>
              Structured stages describing the end-to-end implementation from raw data ingestion to web serving:
            </p>
          </div>

          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Stage</th>
                  <th style={{ width: '43%' }}>Implementation</th>
                  <th style={{ width: '35%' }}>Engineering Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Prepare Data</strong></td>
                  <td><code>download_data.py</code> fetches the UCI archive; <code>train.py</code> reads tab-separated labels and messages</td>
                  <td>Start with an existing labeled corpus</td>
                </tr>
                <tr>
                  <td><strong>Train &amp; Evaluate</strong></td>
                  <td>Normalize text, split 80/20, fit TF-IDF plus Multinomial Naive Bayes, print metrics</td>
                  <td>Establish a measurable baseline</td>
                </tr>
                <tr>
                  <td><strong>Persist Pipeline</strong></td>
                  <td>Save vectorizer and classifier together as <code>spam_classifier.joblib</code></td>
                  <td>Reuse fitted transformations during prediction</td>
                </tr>
                <tr>
                  <td><strong>Serve Predictions</strong></td>
                  <td>FastAPI loads the artifact at import and exposes <code>POST /predict</code></td>
                  <td>Make the model callable from a browser</td>
                </tr>
                <tr>
                  <td><strong>Present Results</strong></td>
                  <td>Angular submits message text and renders label, confidence, and connection errors</td>
                  <td>Make the classifier usable without Python knowledge</td>
                </tr>
                <tr>
                  <td><strong>Configure Deployment</strong></td>
                  <td><code>vercel.json</code> declares Python and static frontend builds plus routing</td>
                  <td>Describe an intended hosting arrangement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: DATASET SELECTION & PROBLEM FRAMING
            =================================================================== */}
        <section className="case-study-section" aria-label="Dataset selection and problem framing">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">4. Dataset Selection &amp; Problem Framing</h2>
          </div>

          <p className="case-study-paragraph">
            The <strong>SMS Spam Collection</strong> is appropriate for a small supervised-learning project because it already supplies text paired with a binary label. The application can focus on feature extraction, model fitting, evaluation, and integration instead of building a labeling operation.
          </p>

          <div className="research-takeaways-grid" style={{ margin: '2rem 0' }}>
            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Parsed Corpus: 5,572 Records</span>
              <p className="takeaway-pill-text">
                4,825 legitimate messages (ham, 86.6%) and 747 spam messages (13.4%).
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Class Imbalance Matters</span>
              <p className="takeaway-pill-text">
                A trivial model predicting "ham" for every input scores 86.6% accuracy. High overall accuracy must be evaluated alongside spam precision and recall.
              </p>
            </div>

            <div className="takeaway-pill-card">
              <span className="takeaway-pill-title">Domain Boundary</span>
              <p className="takeaway-pill-text">
                The corpus cannot establish performance on modern HTML email phishing, multilingual text, or weaponized attachments.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: WHY THESE FRAMEWORKS FIT A SIMPLE PROJECT
            =================================================================== */}
        <section className="case-study-section" aria-label="Framework evaluation">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">5. Why These Frameworks Fit a Simple Project</h2>
          </div>

          <div className="pivots-stack">
            {/* Angular */}
            <div className="pivot-card">
              <div className="pivot-header">
                <span className="pivot-number">01</span>
                <h4 className="pivot-title">Angular 17: Structure &amp; Clear Component Model</h4>
              </div>
              <div className="pivot-body-grid">
                <div className="pivot-feedback-col">
                  <span className="pivot-subhead">Why It Fits:</span>
                  <p className="pivot-text">
                    The frontend uses a standalone <code>AppComponent</code>. It imports <code>CommonModule</code> and <code>FormsModule</code> directly, binds the textarea with <code>ngModel</code>, and uses Angular <code>HttpClient</code> to submit requests. Formatting pipes, animations, and component state live cohesively in TypeScript.
                  </p>
                </div>
                <div className="pivot-decision-col">
                  <span className="pivot-subhead">Engineering Trade-off:</span>
                  <p className="pivot-text">
                    Angular introduces framework overhead compared to plain HTML/JS. However, keeping the application to a single standalone component and three state fields (message, result, error) limits overhead while offering structured extensibility.
                  </p>
                </div>
              </div>
            </div>

            {/* FastAPI */}
            <div className="pivot-card">
              <div className="pivot-header">
                <span className="pivot-number">02</span>
                <h4 className="pivot-title">FastAPI: Small Typed Boundary Around Python Inference</h4>
              </div>
              <div className="pivot-body-grid">
                <div className="pivot-feedback-col">
                  <span className="pivot-subhead">Why It Fits:</span>
                  <p className="pivot-text">
                    The backend's main task is to accept JSON, preprocess text, call the saved pipeline, and return predictions. Keeping inference in Python avoids running a separate model-serving microservice. Pydantic models define <code>MessageRequest</code> and <code>PredictionResponse</code>.
                  </p>
                </div>
                <div className="pivot-decision-col">
                  <span className="pivot-subhead">Engineering Trade-off:</span>
                  <p className="pivot-text">
                    FastAPI provides validation and generated OpenAPI documentation with minimal boilerplate. The endpoint is synchronous; Uvicorn serves requests locally without multi-worker queue complexity.
                  </p>
                </div>
              </div>
            </div>

            {/* Scikit-Learn */}
            <div className="pivot-card">
              <div className="pivot-header">
                <span className="pivot-number">03</span>
                <h4 className="pivot-title">Scikit-Learn: Complete Classical ML Workflow</h4>
              </div>
              <div className="pivot-body-grid">
                <div className="pivot-feedback-col">
                  <span className="pivot-subhead">Why It Fits:</span>
                  <p className="pivot-text">
                    Supplies the vectorizer, classifier, train/test split, pipeline, and evaluation metrics in a single standard library. Runs cleanly on CPU without GPU overhead or recurring cloud LLM API costs.
                  </p>
                </div>
                <div className="pivot-decision-col">
                  <span className="pivot-subhead">Engineering Trade-off:</span>
                  <p className="pivot-text">
                    Bag-of-words ignores word order and syntactic nuance, but provides a transparent, explainable baseline where model decisions can be audited directly against term weights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Libraries Table */}
          <div style={{ marginTop: '3rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '1rem' }}>
              Supporting Libraries and Deliberate Scope Choices
            </h4>
            <div className="case-study-table-wrapper">
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th>Choice</th>
                    <th>Why It Fits</th>
                    <th>Trade-off or Boundary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>pandas</strong></td>
                    <td>Loads labeled tabular data and applies preprocessing clearly</td>
                    <td>Helpful for readable analysis; modest memory footprint</td>
                  </tr>
                  <tr>
                    <td><strong>Joblib</strong></td>
                    <td>Persists the fitted scikit-learn pipeline for instant reuse</td>
                    <td>Requires compatible Python &amp; scikit-learn versions</td>
                  </tr>
                  <tr>
                    <td><strong>Custom CSS &amp; PrimeIcons</strong></td>
                    <td>Lightweight styling without bloated third-party UI suites</td>
                    <td>Maintains fast bundle size and custom dark/light styling</td>
                  </tr>
                  <tr>
                    <td><strong>No Database</strong></td>
                    <td>Predictions do not require persistent user state</td>
                    <td>No history or accounts; maximum simplicity and privacy</td>
                  </tr>
                  <tr>
                    <td><strong>No External AI API</strong></td>
                    <td>Predictions run on the locally serialized classifier</td>
                    <td>Zero cost per inference; completely self-contained</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: MACHINE LEARNING PIPELINE
            =================================================================== */}
        <section className="case-study-section" aria-label="Machine learning pipeline">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">6. Machine Learning Pipeline: How Text Becomes a Prediction</h2>
          </div>

          <div className="pivots-stack">
            <div className="pivot-card">
              <span className="pivot-subhead">Step 1</span>
              <h4 className="pivot-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                Consistent Text Normalization
              </h4>
              <p className="pivot-text">
                Training and prediction lowercase text and strip characters in Python's <code>string.punctuation</code>. For example, <em>"WIN a FREE prize!!!"</em> becomes <em>"win a free prize"</em>. Lowercasing reduces vocabulary fragmentation while punctuation removal simplifies sparse vectors.
              </p>
            </div>

            <div className="pivot-card">
              <span className="pivot-subhead">Step 2</span>
              <h4 className="pivot-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                80/20 Train/Test Split
              </h4>
              <p className="pivot-text">
                <code>train_test_split</code> uses <code>test_size=0.2</code> and <code>random_state=42</code>. For the parsed corpus, this yields 4,457 training messages and 1,115 held-out test messages for objective validation.
              </p>
            </div>

            <div className="pivot-card">
              <span className="pivot-subhead">Step 3</span>
              <h4 className="pivot-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                TF-IDF Feature Extraction
              </h4>
              <p className="pivot-text">
                <code>TfidfVectorizer(stop_words="english")</code> converts text into sparse numerical vectors. Term frequency captures term occurrence within a message, while inverse document frequency damps words widespread across the corpus.
              </p>
            </div>

            <div className="pivot-card">
              <span className="pivot-subhead">Step 4</span>
              <h4 className="pivot-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                Multinomial Naive Bayes Classification
              </h4>
              <p className="pivot-text">
                <code>MultinomialNB()</code> calculates class posterior probabilities based on Bayes' theorem, assuming conditional independence between terms given the class. It evaluates non-negative TF-IDF features with minimal computational overhead.
              </p>
            </div>

            <div className="pivot-card">
              <span className="pivot-subhead">Step 5</span>
              <h4 className="pivot-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                Pipeline Persistence via Joblib
              </h4>
              <p className="pivot-text">
                The vectorizer and classifier are encapsulated into a scikit-learn <code>Pipeline</code> and serialized together into <code>models/spam_classifier.joblib</code>, ensuring vocabulary indices and classification weights stay perfectly aligned.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: FULL-STACK ARCHITECTURE & LIFECYCLE
            =================================================================== */}
        <section className="case-study-section" aria-label="Full-stack architecture">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">7. Full-Stack Architecture &amp; Request Lifecycle</h2>
          </div>

          <div className="arch-diagram-wrapper">
            <div className="arch-frontend-box">
              <span className="arch-box-role">Client Interface</span>
              <h4 className="arch-box-title">Angular 17 Standalone Component</h4>
              <p className="arch-box-desc">Template-Driven Forms &bull; RxJS HttpClient &bull; Custom CSS</p>
            </div>

            <div className="arch-connections-split" style={{ maxWidth: '400px' }}>
              <div className="arch-pipe-line">
                <span className="arch-pipe-label">POST /predict (JSON)</span>
                <span className="arch-arrow-down">&darr;</span>
              </div>
            </div>

            <div className="arch-backend-card highlight-card" style={{ width: '100%', maxWidth: '650px', textAlign: 'center' }}>
              <span className="arch-box-role">Inference Server</span>
              <h4 className="arch-box-title">FastAPI REST Microservice</h4>
              <p className="arch-box-desc" style={{ marginBottom: '0.75rem' }}>
                Loads <code>spam_classifier.joblib</code> into memory at startup
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.86rem', color: 'var(--color-ink-muted)' }}>
                <span>&bull; Pydantic Schema Validation</span>
                <span>&bull; Text Sanitization</span>
                <span>&bull; Sub-50ms CPU Execution</span>
              </div>
            </div>
          </div>

          {/* Sample Payloads */}
          <div className="journey-scenarios-grid" style={{ marginTop: '2.5rem' }}>
            <div className="journey-scenario-card void-card">
              <span className="scenario-label">Client Request Payload:</span>
              <pre style={{ margin: '0.5rem 0', padding: '1rem', backgroundColor: 'var(--color-canvas-subtle)', borderRadius: 'var(--radius-xs)', overflowX: 'auto', fontSize: '0.86rem', fontFamily: 'monospace' }}>
{`POST /predict
{
  "message": "Congratulations! Claim your free prize now. Call immediately!"
}`}
              </pre>
            </div>

            <div className="journey-scenario-card clarity-card">
              <span className="scenario-label">FastAPI Model Response:</span>
              <pre style={{ margin: '0.5rem 0', padding: '1rem', backgroundColor: 'var(--color-canvas-subtle)', borderRadius: 'var(--radius-xs)', overflowX: 'auto', fontSize: '0.86rem', fontFamily: 'monospace' }}>
{`HTTP 200 OK
{
  "label": "spam",
  "confidence": 0.92575,
  "is_spam": true
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 8: INTERFACE DESIGN & USABILITY
            =================================================================== */}
        <section className="case-study-section" aria-label="Interface design and usability">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">8. Interface Design &amp; Usability Choices</h2>
          </div>

          <div className="case-study-large-media-box">
            <img 
              src="/assets/projects/scam_detector.png" 
              alt="Smart Spam Detection Web Application Interface" 
              className="case-study-large-img"
            />
          </div>

          <p className="case-study-paragraph" style={{ marginTop: '1.5rem' }}>
            The interface employs a focused two-column layout: an explanatory value proposition on the left (highlighting instant analysis, privacy focus, and model metrics) and an interactive message assessment card on the right.
          </p>
          <ul className="case-study-goals-list">
            <li><strong>Frictionless Interaction:</strong> Zero login requirements or inbox OAuth integrations; paste text and receive instant classification.</li>
            <li><strong>Clear Color Coding:</strong> High-contrast badges for predicted spam vs. legitimate messages.</li>
            <li><strong>Confidence Guidance:</strong> Probability percentage displayed to two decimal places to reflect model confidence beyond a blunt binary flag.</li>
          </ul>
        </section>

        {/* ===================================================================
            SECTION 9: EVALUATION & REPRODUCED BENCHMARKS
            =================================================================== */}
        <section className="case-study-section" aria-label="Evaluation benchmarks">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">9. Evaluation: What the Results Actually Demonstrate</h2>
            <p className="case-study-paragraph" style={{ marginTop: '0.5rem' }}>
              Recreating the training pipeline on the held-out test partition (1,115 messages) produced an exact <strong>96.86% overall accuracy</strong>, independently validating the repository's performance claim:
            </p>
          </div>

          {/* Metric Table */}
          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Reproduced Result</th>
                  <th>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Test Partition Size</strong></td>
                  <td>1,115 messages</td>
                  <td>966 legitimate messages (ham) and 149 spam messages</td>
                </tr>
                <tr>
                  <td><strong>Overall Accuracy</strong></td>
                  <td><strong>96.86%</strong></td>
                  <td>1,080 correct classifications out of 1,115</td>
                </tr>
                <tr>
                  <td><strong>Spam Precision</strong></td>
                  <td><strong>100.00%</strong></td>
                  <td>Zero false positives; all 114 spam flags were genuine spam</td>
                </tr>
                <tr>
                  <td><strong>Spam Recall</strong></td>
                  <td><strong>76.51%</strong></td>
                  <td>114 of 149 spam messages detected (35 false negatives)</td>
                </tr>
                <tr>
                  <td><strong>Spam F1 Score</strong></td>
                  <td><strong>86.69%</strong></td>
                  <td>Harmonic mean balancing perfect precision with moderate recall</td>
                </tr>
                <tr>
                  <td><strong>False Positives</strong></td>
                  <td><strong>0</strong></td>
                  <td>Zero legitimate messages were wrongly marked as spam</td>
                </tr>
                <tr>
                  <td><strong>False Negatives</strong></td>
                  <td>35</td>
                  <td>Unseen spam messages that bypassed the unigram model</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Confusion Matrix */}
          <div style={{ marginTop: '2.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '0.75rem' }}>
              Reproduced Confusion Matrix
            </h4>
            <div className="case-study-table-wrapper" style={{ maxWidth: '600px' }}>
              <table className="case-study-table">
                <thead>
                  <tr>
                    <th>Actual Class</th>
                    <th>Predicted Ham</th>
                    <th>Predicted Spam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Ham (Actual)</strong></td>
                    <td style={{ color: '#059669', fontWeight: 700 }}>966 (True Negatives)</td>
                    <td>0 (False Positives)</td>
                  </tr>
                  <tr>
                    <td><strong>Spam (Actual)</strong></td>
                    <td style={{ color: '#dc2626' }}>35 (False Negatives)</td>
                    <td style={{ color: '#059669', fontWeight: 700 }}>114 (True Positives)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10 & 11: ENGINEERING CHALLENGES & OUTCOMES
            =================================================================== */}
        <section className="case-study-section" aria-label="Engineering Challenges">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">10. Engineering Challenges &amp; Current Boundaries</h2>
          </div>

          <div className="engineering-decisions-grid">
            <div className="decision-card">
              <h5 className="decision-title">Training-Serving Consistency</h5>
              <p className="decision-desc">
                Text normalization must match identically between training scripts and production endpoints. Encapsulating both vectorizer and estimator within a serialized scikit-learn pipeline guarantees vocabulary index alignment across environments.
              </p>
            </div>

            <div className="decision-card">
              <h5 className="decision-title">In-Memory Model Loading</h5>
              <p className="decision-desc">
                Loading the Joblib artifact once at FastAPI module initialization prevents disk I/O bottlenecks, ensuring instant inference response times without cold-load latency on repeated requests.
              </p>
            </div>

            <div className="decision-card">
              <h5 className="decision-title">Zero-Persistence Privacy</h5>
              <p className="decision-desc">
                By omitting database logging and external LLM API forwards, user messages are evaluated ephemerally in RAM and immediately discarded, ensuring private text is never stored.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 12: NEXT ITERATION PRIORITIES
            =================================================================== */}
        <section className="case-study-section" aria-label="Next iteration">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">11. Next Iteration Priorities</h2>
          </div>

          <div className="case-study-table-wrapper">
            <table className="case-study-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Proposed Improvement</th>
                  <th>Engineering Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>P1</strong></td>
                  <td>Group duplicate messages before splitting; use class-aware stratified partitions</td>
                  <td>Eliminate optimistic test leakage and make generalization benchmarks more rigorous</td>
                </tr>
                <tr>
                  <td><strong>P2</strong></td>
                  <td>Validate blank and oversized input; consolidate text sanitization; pin requirements</td>
                  <td>Harden API robustness and guarantee cross-version reproducibility</td>
                </tr>
                <tr>
                  <td><strong>P3</strong></td>
                  <td>Benchmark ComplementNB, Logistic Regression, and subword character n-grams</td>
                  <td>Improve spam recall on novel adversarial phishing formats</td>
                </tr>
                <tr>
                  <td><strong>P4</strong></td>
                  <td>Implement probability calibration (Platt scaling / Isotonic regression)</td>
                  <td>Ensure displayed confidence percentages accurately reflect posterior likelihood</td>
                </tr>
                <tr>
                  <td><strong>P5</strong></td>
                  <td>Add in-flight loading spinners and typed Angular response interfaces</td>
                  <td>Prevent race conditions on rapid multi-submissions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===================================================================
            SECTION 13: KEY TAKEAWAYS
            =================================================================== */}
        <section className="case-study-section" aria-label="Key takeaways">
          <div className="case-study-process-header">
            <h2 className="case-study-process-title">12. Key Takeaways</h2>
          </div>

          <div className="takeaways-master-grid">
            <div className="takeaway-card">
              <div className="takeaway-badge">01</div>
              <h4 className="takeaway-headline">Focus Beats Bloat</h4>
              <p className="takeaway-body">
                A compact application with a single clear interaction demonstrates sound engineering when architecture boundaries are crisp. FastAPI handles serving, Angular organizes presentation, and scikit-learn provides an auditable baseline.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-badge">02</div>
              <h4 className="takeaway-headline">Accuracy Alone is Incomplete</h4>
              <p className="takeaway-body">
                In imbalanced security domains, 96.86% accuracy must be understood alongside 100% precision and 76.51% recall. Explaining the trade-offs of false negatives elevates a simple classifier into a rigorous engineering study.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-badge">03</div>
              <h4 className="takeaway-headline">Classical ML Remains Potent</h4>
              <p className="takeaway-body">
                Not every text problem requires an expensive cloud LLM. Multinomial Naive Bayes delivers low-latency CPU inference with zero running costs and zero vendor lock-in.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            TECHNOLOGIES & LIBRARIES
            =================================================================== */}
        <section className="case-study-section" style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2.5rem' }}>
          <h3 className="case-study-h3" style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>
            Technologies &amp; Libraries
          </h3>
          <div className="case-study-tech-pills">
            {project.techStack.map((tech, i) => (
              <span key={i} className="case-study-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* BOTTOM ACTIONS */}
        <CaseStudyBottomBar project={project} onBack={onBack} />
      </div>
    </div>
  );
}

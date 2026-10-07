import React, { Component } from 'react';

export default class CaseStudyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Case study chunk failed to load:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onBack) {
      this.props.onBack();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="case-study-page-wrap" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container case-study-container" style={{ textAlign: 'center', maxWidth: '580px', padding: '3rem 1.5rem' }}>
            <div 
              style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                color: '#ef4444', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '1.5rem', 
                margin: '0 auto 1.25rem' 
              }}
            >
              ⚠️
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-ink)', marginBottom: '0.65rem' }}>
              Unable to Load Case Study
            </h2>
            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.96rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              A network interruption or stale cached resource prevented this case study component from loading. Please retry or return to the project catalog.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                onClick={this.handleReload}
                className="btn-case-study-live"
                style={{ cursor: 'pointer', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              >
                Reload Page
              </button>
              <button 
                type="button" 
                onClick={this.handleReset}
                className="btn-case-study-back"
                style={{ cursor: 'pointer', margin: 0, padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              >
                &larr; Return to All Projects
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

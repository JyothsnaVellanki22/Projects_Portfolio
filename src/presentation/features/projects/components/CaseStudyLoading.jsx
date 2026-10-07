import React from 'react';

export default function CaseStudyLoading({ onBack }) {
  return (
    <div className="case-study-page-wrap" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container case-study-container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <div 
          style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid rgba(15, 23, 42, 0.1)', 
            borderTopColor: 'var(--color-ink)', 
            borderRadius: '50%', 
            margin: '0 auto 1.5rem', 
            animation: 'spin 0.75s linear infinite' 
          }} 
        />
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>
          Loading case study...
        </p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

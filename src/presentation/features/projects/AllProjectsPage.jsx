import React from 'react';
import ProjectList from './ProjectList';
import './projects.css';

export default function AllProjectsPage({
  projects,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  liveOnly,
  onToggleLiveOnly,
  filteredCount,
  totalCount,
  onSelectProject,
  onResetFilters,
  onBackToHome
}) {
  return (
    <div className="all-projects-page-wrap">
      <div className="container">
        {/* Top Navigation Row */}
        <div className="all-projects-top-nav">
          <button 
            type="button" 
            className="btn-back-home"
            onClick={onBackToHome}
            title="Return to homepage"
          >
            &larr; Back to Home
          </button>
          
          <div className="all-projects-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active">All Projects</span>
          </div>
        </div>

        {/* Page Header */}
        <header className="all-projects-header">
          <h1 className="all-projects-title">All Engineering Projects</h1>
          <p className="all-projects-subtitle">
            Explore complete case studies across Generative AI systems, RAG pipelines, security audits, and production web applications.
          </p>
        </header>

        {/* Projects Grid */}
        <ProjectList 
          projects={projects}
          onSelectProject={onSelectProject}
          onResetFilters={onResetFilters}
        />
      </div>
    </div>
  );
}

import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function ProjectList({ projects, onSelectProject, onResetFilters }) {
  if (projects.length === 0) {
    return (
      <div className="empty-results-box">
        <h3>No projects match your filter</h3>
        <p>Try searching for a different term or reset your active filters.</p>
        <button 
          type="button" 
          className="btn-editorial-reset"
          onClick={onResetFilters}
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="projects-editorial-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onSelectProject={onSelectProject}
        />
      ))}
    </div>
  );
}

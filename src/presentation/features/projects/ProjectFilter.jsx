import React from 'react';
import { SearchIcon } from '../../common/Icons';
import './projects.css';

export default function ProjectFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  filteredCount,
  totalCount
}) {
  return (
    <div className="filter-bar-container">
      <div className="filter-search-row">
        <div className="filter-search-box" style={{ maxWidth: '100%', flex: 1 }}>
          <SearchIcon size={16} className="filter-search-icon" />
          <input 
            type="text"
            className="filter-search-input"
            placeholder="Search projects (FastAPI, React, Ollama, NLP...)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search projects"
          />
        </div>
      </div>

      <div className="filter-tabs-row">
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="filter-meta-count">
          Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> projects
        </div>
      </div>
    </div>
  );
}

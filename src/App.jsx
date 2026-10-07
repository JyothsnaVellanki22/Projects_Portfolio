import React from 'react';
import { useProjectsFilter } from './application/hooks/useProjectsFilter';
import Header from './presentation/features/navigation/Header';
import HeroSection from './presentation/features/hero/HeroSection';
import FeaturedProjectsShowcase from './presentation/features/projects/FeaturedProjectsShowcase';
import AllProjectsPage from './presentation/features/projects/AllProjectsPage';
import ProjectDetailPage from './presentation/features/projects/ProjectDetailPage';
import AboutSection from './presentation/features/about/AboutSection';
import Footer from './presentation/features/footer/Footer';

export default function App() {
  const {
    allProjects,
    featuredProjects,
    projects,
    totalCount,
    filteredCount,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    liveOnly,
    setLiveOnly,
    resetFilters,
    activeProject,
    isAllProjectsView,
    openProject,
    closeProject,
    navigateToAllProjects,
    navigateToHome
  } = useProjectsFilter();

  return (
    <div className="editorial-app-root">
      <Header 
        onNavigateHome={navigateToHome}
        onNavigateProjects={navigateToAllProjects}
        isAllProjectsActive={isAllProjectsView}
      />
      
      <main>
        {activeProject ? (
          <ProjectDetailPage 
            project={activeProject}
            onBack={closeProject}
            allProjects={allProjects}
            onSelectProject={openProject}
          />
        ) : isAllProjectsView ? (
          <AllProjectsPage 
            projects={projects}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            liveOnly={liveOnly}
            onToggleLiveOnly={() => setLiveOnly(!liveOnly)}
            filteredCount={filteredCount}
            totalCount={totalCount}
            onSelectProject={openProject}
            onResetFilters={resetFilters}
            onBackToHome={navigateToHome}
          />
        ) : (
          <>
            <HeroSection />

            {/* Bespoke 2-Project Showcase + Callout Banner */}
            <FeaturedProjectsShowcase 
              projects={featuredProjects}
              onSelectProject={openProject}
              onNavigateToAllProjects={navigateToAllProjects}
            />

            {/* Profile Narrative, Experience Pillars, Philosophy & Skills */}
            <AboutSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

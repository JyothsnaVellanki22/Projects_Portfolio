import React from 'react';
import { useProjectsFilter } from './application/hooks/useProjectsFilter';
import Header from './presentation/features/navigation/Header';
import HeroSection from './presentation/features/hero/HeroSection';
import FeaturedProjectsShowcase from './presentation/features/projects/FeaturedProjectsShowcase';
import AllProjectsPage from './presentation/features/projects/AllProjectsPage';
import ProjectDetailPage from './presentation/features/projects/ProjectDetailPage';
import Footer from './presentation/features/footer/Footer';

export default function App() {
  const {
    allProjects,
    featuredProjects,
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
            projects={allProjects}
            onSelectProject={openProject}
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

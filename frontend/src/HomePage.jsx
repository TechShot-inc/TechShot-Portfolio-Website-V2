import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ProjectsView from './ProjectsView/ProjectsView';
import TeamView from './TeamView/TeamView';
import ResourcesView from './ResourcesView/ResourcesView';

function HomePage({ homeRef, projectsRef, teamRef, resourcesRef }) {
  return (
    <>
      <div ref={homeRef}>
        <LandingPage />
      </div>
      <div ref={projectsRef}>
        <ProjectsView />
      </div>
      <div ref={teamRef}>
        <TeamView />
      </div>
      <div ref={resourcesRef}>
        <ResourcesView />
      </div>
    </>
  );
}

export default HomePage;

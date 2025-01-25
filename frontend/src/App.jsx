import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ProfilePage from './ProfilePage';
import React, { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const teamRef = useRef(null);
  const resourcesRef = useRef(null);
  return (
    <>
      <Header
        homeRef={homeRef}
        projectsRef={projectsRef}
        teamRef={teamRef}
        resourcesRef={resourcesRef}
      />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage
              homeRef={homeRef}
              projectsRef={projectsRef}
              teamRef={teamRef}
              resourcesRef={resourcesRef}
            />}
            />
            <Route path="/project-1" element={<ProjectPage />} />
            <Route path="/profile-ahemd" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App

import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage';
import ProjectPage from './ProjectPage/ProjectPage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import React, { useRef } from 'react';
import Footer from './Footer/Footer';
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
            <Route path="/project/:name" element={<ProjectPage />}
              errorElement={<NotFoundPage />} />
            <Route path="/members/:name" element={<ProfilePage />} errorElement={<NotFoundPage />} />

          </Routes>
        </div>
      </Router>
      <Footer
        homeRef={homeRef}
        projectsRef={projectsRef}
        teamRef={teamRef}
        resourcesRef={resourcesRef} />
    </>
  );
}

export default App
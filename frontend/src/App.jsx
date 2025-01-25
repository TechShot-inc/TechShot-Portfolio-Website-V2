import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage/ProjectPage';
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
                <Routes>
                    <Route path="/" element={
                        <HomePage
                            homeRef={homeRef}
                            projectsRef={projectsRef}
                            teamRef={teamRef}
                            resourcesRef={resourcesRef}
                        />
                    }/>
                    <Route path="/project/:id" element={<ProjectPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

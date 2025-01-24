import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ProfilePage from './ProfilePage';

function App() {
  return (
    <>
      <Header />
      <Router>
      <div>
        <Routes> 
            <Route path="/" element={<HomePage />} /> 
            <Route path="/project-1" element={<ProjectPage />} />
            <Route path="/profile-ahemd" element={<ProfilePage />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App

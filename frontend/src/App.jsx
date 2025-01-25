import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}
              errorElement={<NotFoundPage />} />
            <Route path="/project-1" element={<ProjectPage />}
              errorElement={<NotFoundPage />} />
            <Route path="/members/:id" element={<ProfilePage />}
              errorElement={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App

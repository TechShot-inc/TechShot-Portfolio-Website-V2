import './Header.css'
import logo from '../../assets/header/logo.svg'
import { Link } from 'react-router-dom';

function scrollToRef(ref, offset = 0) {
  if (ref.current) {
    const position = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  }
}

export default function Header({ homeRef, projectsRef, teamRef, resourcesRef }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary headerContainer">
      <div className="container-fluid header">
        <div className="logoContainer">
          <Link to="/" onClick={() => scrollToRef(homeRef)}>
            <img src={logo} className="logo" alt="logo" />
            <span className="logoText">TECH SHOT</span>
          </Link>
        </div>
        <div className="space"></div>
        <button className="navbar-toggler toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-text button" onClick={() => scrollToRef(homeRef, 1000)}>Home</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button" onClick={() => scrollToRef(projectsRef, 150)}>Projects</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button" onClick={() => scrollToRef(teamRef, 120)}>Team</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button" onClick={() => scrollToRef(resourcesRef, 150)}>Resources</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

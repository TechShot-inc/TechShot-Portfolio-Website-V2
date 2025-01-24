import './Header.css'
import logo from '../../assets/header/logo.svg'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary headerContainer">
      <div className="container-fluid header" >
        <div className="logoContainer">
          <img src={logo} className="logo" />
          <span className="logoText">TECH SHOT</span>
        </div>
        <div className="space"></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-text button">Home</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button">Projects</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button">Team</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-text button">Resources</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

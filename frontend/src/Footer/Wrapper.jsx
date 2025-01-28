import "./Wrapper.css"
import SocialLinks from './SocialLinks';
import logo from '../../assets/header/logo.svg'
import '../Header/Header.css'

function scrollToRef(ref) {
    if (ref.current) {
        const position = ref.current.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({ top: position, behavior: 'smooth' });
    }
}

export default function Wrapper({ homeRef, projectsRef, teamRef, resourcesRef }) {

    return (
        <div className='wrapper-container container'>
            <div className='row wrapper-row'>
                <div className='col-sm-4 col-md-4 col-lg-4 footerContent sloganContainer'>
                    <img src={logo} className='logo' />
                    <div className='slogan'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4'>
                    <h5>Information</h5>
                    <ul className='information footerContent'>
                        <li><button className="btn btn-text" onClick={() => scrollToRef(homeRef)}>Home</button></li>
                        <li><button className="btn btn-text" onClick={() => scrollToRef(projectsRef)}>Projects</button></li>
                        <li><button className="btn btn-text" onClick={() => scrollToRef(teamRef)}>Team</button></li>
                        <li><button className="btn btn-text" onClick={() => scrollToRef(resourcesRef)}>Resources</button></li>
                        {/*   <li><a href={}>Stack</a></li> */}
                    </ul>
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4 footerContent contactUs'>
                    <h5>Contact Us</h5>
                    <div className='phoneNumber'>+923183561921</div>
                </div>
            </div>
            <div className='row social col-6'>
                <SocialLinks />
            </div>

        </div >
    )

}
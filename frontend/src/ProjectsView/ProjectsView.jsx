import './ProjectsView.css'
import data from '../../assets/projectsView/data.jpg'
import chip from '../../assets/projectsView/chip.jpg'
import car from '../../assets/projectsView/car.jpg'
import robot from '../../assets/projectsView/robot.jpg'

export default function ProjectsView() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade projects-cards" data-bs-touch="true">
            <span className='title'>Our Projects</span>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={robot} className="d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='label'>Computer Vision</h5>
                        <p className='sub-label'>a Robot that can monitor and analyze environmental conditions and detect carbon percent in air</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={car} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='label'>Embedded Systems</h5>
                        <p className='sub-label'>parking assistance system that uses sensors to detect obstacles and guide drivers.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={chip} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='label'>PCB design</h5>
                        <p className='sub-label'>3mlna el ba7r t7iena</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={data} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='label'>Data Analysis</h5>
                        <p className='sub-label'>processes raw data to provide insights and visualizations for informed decision-making.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}
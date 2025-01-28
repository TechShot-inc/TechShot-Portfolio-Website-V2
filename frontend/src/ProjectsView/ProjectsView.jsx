import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsView.css';

export default function ProjectsView() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects data from the backend
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/projects'); // Replace with your API endpoint
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchData();
    }, []);

    if (!projects.length) {
        return <></>;
    }

    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade projects-cards" data-bs-touch="true">
            <span className='projects-title'>Our Projects</span>
            <div className="carousel-indicators">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {projects.map((project, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <Link to={`/project/${project.name}`}>
                            <img src={project.projectImagePath} className="d-block w-100" alt={project.name} />
                        </Link>
                        <div className="carousel-caption">
                            <h5 className='label'>{project.name}</h5>
                            <p className='sub-label'>{project.projectOverview}</p>
                        </div>
                    </div>
                ))}
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

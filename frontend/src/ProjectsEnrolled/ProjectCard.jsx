import "./ProjectCard.css"
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ name, desc ,projectID}) {
    const navigate = useNavigate();
    return (
        /*         <div className="project-card">
                    <h2>{name}</h2>
                    <div>{desc}</div>
                    <button className="project-button">Go to Project</button>
                </div> */
        <div className="project-card">
            <h2>{name || "Project Name Unavailable"}</h2>
            <div>{desc || "No description provided for this project."}</div>
            <button onClick={() => navigate(`/project/${name}`)} className="project-button">Go to Project</button>
        </div>
    )
}
import "./ProjectCard.css"
export default function ProjectCard({ name, desc }) {
    return (
        /*         <div className="project-card">
                    <h2>{name}</h2>
                    <div>{desc}</div>
                    <button className="project-button">Go to Project</button>
                </div> */
        <div className="project-card">
            <h2>{name || "Project Name Unavailable"}</h2>
            <div>{desc || "No description provided for this project."}</div>
            <button className="project-button">Go to Project</button>
        </div>
    )
}
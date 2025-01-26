import "./ProjectsEnrolled.css";
//import '.../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import ProjectCard from "./ProjectCard"
export default function ProjectsEnrolled({ projects }) {

    return (
        <div className="projects">
            <h1 className="projects-enrolled-header">Projects Enrolled</h1>
            <div className="container projects-enrolled">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} projectID={project._id} name={project.name} desc={project.projectOverview} />
                    ))}
                </div>
            </div>
        </div>
    )
}
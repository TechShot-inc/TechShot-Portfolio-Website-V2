import "./ProjectsEnrolled.css";
//import '.../assets/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import ProjectCard from "./ProjectCard"
export default function ProjectsEnrolled({ projects }) {

    return (
        <>
            <h1 className="projects-enrolled-header">Projects Enrolled</h1>
            <div className="container projects-enrolled">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project._id} name={project.name} desc={project.briefDescription} />
                    ))}

                    <ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." />
                    <ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." />
                    <ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." />
                    <ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." />
                    {/*                 < ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." link="https://google.com" />
                <ProjectCard name="UX Driven Engineering" desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code." link="https://google.com" />
            </div>*/}     </div>

            </div>
        </>
    )
}
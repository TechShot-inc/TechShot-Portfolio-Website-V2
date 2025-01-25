//import image from '../ProfileInfo/assets/mike.jpeg';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "./TeamMemberView.css";
import ProjectsEnrolled from "../ProjectsEnrolled/ProjectsEnrolled";
export default function TeamMembersView({ name, email, linkedin, github, image, projects }) {
    return (
        <div className="container team-member-profile">
            <ProfileInfo image={image} name={name} email={email} github={github} linkedin={linkedin} />
            <ProjectsEnrolled projects={projects} />
        </div>
    )
}
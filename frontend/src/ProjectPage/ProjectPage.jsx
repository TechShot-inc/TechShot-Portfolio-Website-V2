import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProjectPage.css';
import ContentSection from './ContentSection';
import TeamMembers from "../TeamMembers/TeamMembers";

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/v1/projects/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                setError(`Failed to fetch project: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!project) return <p>No project found</p>;

    return <ProjectMembers project={project} />;
};

const fetchMemberNames = async (memberIds) => {
    try {
        const memberNames = await Promise.all(
            memberIds.map(async (id) => {
                const response = await fetch(`http://localhost:4000/api/v1/members/id/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                const data = await response.json();
                return { id, name: data.name ,imgPath : data.imgPath };  // Ensure both id and name are returned
            })
        );
        return memberNames;
    } catch (error) {
        console.error("Error fetching member names:", error);
        return [];
    }
};

const ProjectMembers = ({ project }) => {
    const [memberNames, setMemberNames] = useState([]);

    useEffect(() => {
        if (project.projectMembersId?.length > 0) {
            fetchMemberNames(project.projectMembersId).then(setMemberNames);
        }
    }, [project.projectMembersId]);

    return (
        <>
            <header>
                <div className="App-header">
                    <div className="header-content">
                        <div className="logo"></div>
                        <h1>{project.name}</h1>
                        <h2>{project.projectOverview}</h2>
                    </div>
                </div>
            </header>
            <main>
                <section className="description">
                    <h3>Description</h3>
                    {project.details.map((detail, index) =>
                        detail.descriptionParagraph.map(paragraph => (
                            <ContentSection
                                key={paragraph._id}
                                title={paragraph.header}
                                text={paragraph.mainParagraph}
                                highlight={paragraph.highlightedText}
                                author={detail.membersID.join(', ')}
                                image={detail.imgPath}
                                altText={`Image ${index + 1}`}
                                imageOnRight={(index + 1) % 2 === 0} // Even indices on right, odd on left
                            />
                        ))
                    )}
                </section>
                <div className="ProjectTeam">
                    <h2 >The team behind this project</h2>
                    <div className="row team-view-row">
                        {memberNames.length > 0 ? (
                            memberNames.map((member) => (
                                <TeamMembers key={member.id} memberId={member.id} name={member.name.split(' ')[0]} image={member.imgPath} />
                            ))
                        ) : (
                            <p>Loading members...</p>
                        )}
                    </div>
                </div>            
            </main>
        </>
    );
};

export default ProjectPage;

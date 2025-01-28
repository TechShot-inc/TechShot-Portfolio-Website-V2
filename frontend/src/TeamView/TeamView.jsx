import { useEffect, useState } from 'react';
import axios from 'axios';
import "./TeamView.css"
import TeamMembers from "../TeamMembers/TeamMembers"


export default function TeamView() {
    const [members, setMembers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/members');
                setMembers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("There was an error fetching the members!", error);
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    // If loading, show a loading message or spinner
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='TeamViewContainer'>
                    <div className="team-view container">
            <h2 style={{ fontWeight: 'bold' }}>Team Members</h2>
            <blockquote>“The one who are crazy enough to think
                they can change the world,
                are the ones who do.” ~Steve Jobs</blockquote>
            {/*  display first member */}
            <div className="team-view-row">
                {members.length > 0 &&
                    <TeamMembers key={members[0]._id} memberId={members[0]._id} name={members[0]} image={members[0].imgPath} />
                }
            </div>
            {/* loop through the rest */}
            <div className="team-view-row">
                {members.slice(1).map((member) => (
                    <TeamMembers key={member._id} memberId={member._id} name={member} image={member.imgPath} />
                ))}
            </div>
        </div>
        </div>
    )
}
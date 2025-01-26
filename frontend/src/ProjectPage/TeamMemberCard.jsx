import { useState, useEffect } from "react";
import "./TeamMemberCard.css"; 
import { Link } from "react-router-dom";
const TeamMemberCard = ({ memberId  }) => {
    
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/v1/members/id/${memberId}`);
                if (!response.ok) {
                    throw new Error(`HTTP status ${response.status}`);
                }
                const data = await response.json();
                setMember(data);
            } catch (error) {
                setError(`Failed to fetch member: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [memberId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!member) return <p>No member found</p>;

    return (
        <Link to={`/members/${member.name}`} className="team-member-card">
            <img src={member.imgPath} alt={member.name} className="member-avatar" />
            <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
            </div>
        </Link>
    );
};

export default TeamMemberCard;

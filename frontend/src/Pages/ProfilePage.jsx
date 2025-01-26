import { useEffect, useState } from 'react';
import Header from "../Header/Header";
import TeamMemberView from "../TeamMemberView/TeamMemberView";
//import Footer from "../Footer/Footer";
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

export default function ProfilePage() {
  const { id ,name} = useParams(); // Get the ID from the URL
  const [member, setMember] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch member
    const fetchMember = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/members/name/${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch member');
        }
        const data = await response.json();
        setMember(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <NotFoundPage />;
  }



  return (
    <>
      <Header />
      <TeamMemberView name={member.name}
        email={member.email}
        linkedin={member.linkedin}
        github={member.git}
        image={member.imgPath}
        projects={member.projects}
      />
      {/*   <Footer /> */}
    </>
  );
}
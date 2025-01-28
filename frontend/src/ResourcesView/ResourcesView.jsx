import './ResourcesView.css';
import Resource from "../Resource/Resource";
import { useState, useEffect } from 'react';

function ResourcesView() {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResources() {
            try {
                const response = await fetch(`http://localhost:4000/api/v1/resources`);
                const data = await response.json();
                if (response.ok) {
                    setResources(data); 
                }
            } catch (error) {
                console.error("Failed to fetch resources:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchResources();
    }, []);

    if (! resources.length) {
        return <div className='NoResources'></div>;
    }

    return (
        <div id='resources-view-container'>
            <h3>Featured</h3>
            <h2 className='resources-title'>Resources</h2>
            <div id='resources-container' className="scroll-container">
                {resources.map((resource) => (
                    <Resource
                        key={resource._id} 
                        image={resource.imgPath} 
                        description={resource.paragraph} 
                        link={resource.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default ResourcesView;

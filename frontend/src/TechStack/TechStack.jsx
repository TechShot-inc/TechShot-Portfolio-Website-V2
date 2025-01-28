import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TechStack.css';

export default function TechStack() {
    const [techStacks, setTechStacks] = useState([]);
    const [activeDiv, setActiveDiv] = useState('');

    useEffect(() => {
        const fetchTechStack = async () => {
            try {
                const { data } = await axios.get('http://localhost:4000/api/v1/stack/techStack');
                setTechStacks(data);
                if (data.length > 0) {
                    setActiveDiv(data[0].category); // Set the first category as active by default
                }
            } catch (error) {
                console.error('Failed to fetch tech stacks', error);
            }
        };

        fetchTechStack();
    }, []);

    return (
        <div className="tech-stack">
            <h2 className='stack-title'>Tech Stack</h2>
            <h3>Our Frameworks</h3>
            <ul className="nav nav-pills nav-fill">
                {techStacks.map(stack => (
                    <li key={stack.category} className="nav-item categoryButton">
                        <a
                            className={`nav-link cat-button ${activeDiv === stack.category ? 'active' : ''}`}
                            onClick={() => setActiveDiv(stack.category)}
                        >
                            {stack.category}
                        </a>
                    </li>
                ))}
            </ul>

            {techStacks.filter(stack => stack.category === activeDiv).map((stack) => (
                <div key={stack.category} className="section">
                    <p>
                        {stack.technologies.map(tech => (
                            <img key={tech._id} src={tech.imgPath} alt={tech.name} className="tech-logo" />
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}

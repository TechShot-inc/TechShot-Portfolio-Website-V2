import React from 'react';
import './ContentSection.css';
import TeamMemberCard from './TeamMemberCard';

function ContentSection({ title, text, highlight, author, image, altText, imageOnRight }) {
    return (
        <div className={`content-section ${imageOnRight ? 'image-right' : 'image-left'}`}>
            <div className="text-content">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="highlight-author-container">
                    <div className="vertical-bar"></div>
                    <p className="highlight">{highlight}</p>
                </div>
                <TeamMemberCard memberId={author} name={author.name}/>
            </div>
            <div className="image-content">
                <img src={image} alt={altText} />
            </div>
        </div>
    );
}

export default ContentSection;

import React from 'react';
import "./css/project-card.css";
import projectImage from '../assets/images/e-book-club.PNG';

const ProjectCard = () => {
    return (
        <div className="project-card-container">
            <h2>Project Title</h2>
            <div className="project-image-container">
                <img className="project-image" src={projectImage}></img>
            </div>
        </div>
    );
};

export default ProjectCard;
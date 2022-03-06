import React from 'react';
import "./css/project-card.css";
import projectImage from '../assets/images/e-book-club.PNG';

const ProjectCard = () => {
    return (
        <div className="project-card-container">
            <div id="title-outer">
                <div id="title-inner">
                    <h1 class="glitch" data-text="Project">Project</h1>
                </div>
            </div>
            <div className="project-image-container">
                <img className="project-image" src={projectImage}></img>
            </div>
            <div className="tv-static"></div>
        </div>
    );
};

export default ProjectCard;
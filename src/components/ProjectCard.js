import React, { useState } from 'react';
import "./css/project-card.css";
import projectImage from '../assets/images/e-book-club.PNG';

const ProjectCard = () => {

    const [hover, setHover] = useState(false);
    
    const renderContent = () => {
        if (hover) {
            return (
                <div className="project-details-container">
                    <div id="title-outer">
                        <div id="title-inner">
                            <h1 class="glitch" data-text="Project">Project</h1>
                        </div>
                    </div>
                </div> 
            );
        } else {
            return (
                <div className="project-poster-container">
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
            }
        
        }
    return (
        <div 
            className="project-card-container"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {renderContent()}
        </div>
    );
};

export default ProjectCard;
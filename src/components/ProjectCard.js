import React, { useState } from 'react';
import "./css/project-card.css";
import projectImage from '../assets/images/e-book-club.PNG';
import Button from './Button';

const ProjectCard = (props) => {

    const technologies = ["Django", "Stripe Api", "S3", "jQuery", "Javascript"]
    const [hover, setHover] = useState(false);
    const technologiesUsed = () => {
        return (
            <div className="technologies-used">
                {technologies.map(
                    (technology)=> {return (
                        <div key={`${technology}${props.uniqueKey}`}>{technology}</div>
                    )})}   
            </div>
        )
    };
    const renderContent = () => {
        if (hover) {
            return (
                <div className="project-details-container">
                    <div id="title-outer">
                        <div id="title-inner">
                            <h1 className="glitch" data-text="Project">Project</h1>
                        </div>
                    </div>
                    <div className="project-description">
                        This is a short description of the project the project is a very good project
                    </div>
                        {technologiesUsed()}
                    <div className="project-card-buttons">
                        <div>
                            <Button 
                                buttonClass="project-github-button" 
                                link="https://github.com"
                                buttonText="View on Github"
                            />
                        </div>
                        <div>
                            <Button 
                                buttonClass="project-github-button" 
                                link="https://github.com"
                                buttonText="View on Github"
                            />
                        </div>
                    </div>
                </div> 
            );
        } else {
            return (
                <div className="project-poster-container">
                    <div id="title-outer">
                        <div id="title-inner">
                            <h1 className="glitch" data-text="Project">Project</h1>
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
    <React.Fragment>
         <div style={{'width': '70px', 'height': '50px'}}>
            <Button 
                buttonClass="project-github-button" 
                link="https://github.com"
                buttonText="View on Github"
            />
        </div>   
        <div 
            className="project-card-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {renderContent()}
        </div>
        </React.Fragment>
    );
};

export default ProjectCard;
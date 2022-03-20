import React, { useState, useRef, useEffect } from 'react';
import * as d3 from "d3";
import "./css/project-card.css";
import projectImage from '../assets/images/e-book-club.PNG';
import Button from './Button';


const ProjectCard = (props) => {
    // component takes props of a project title and description, live and githublinks
    // as well as an array of technologies used
    const [hover, setHover] = useState(false);
    const detailsRef = useRef();
    const technologiesUsed = () => {
        return (
            <div className="technologies-used">
                {props.technologies.map(
                    (technology)=> {return (
                        <div key={`${technology}${props.uniqueKey}`}>{technology}</div>
                    )})}   
            </div>
        )
    };

    useEffect(() => {
        if (detailsRef.current !== null) {
        if (hover) {
            d3.select(detailsRef.current).style("opacity", 0) 
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 1)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 0)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 1)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 0)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 1)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 0)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 1)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 0)
            .transition().duration(parseInt(Math.random()*50)).ease(d3.easeLinear).style("opacity", 1);
        }
    }
    }, [hover]);

    const renderContent = () => {
        if (hover) {
            return (
                <div ref={detailsRef} data-visible="false" className="project-details-container">
                    <div id="title-outer">
                        <div id="title-inner">
                            <h1 className="glitch" data-text={props.projectTitle}>{props.projectTitle}</h1>
                        </div>
                    </div>
                    <div className="project-description">
                        {props.projectDescription}
                    </div>
                        {technologiesUsed()}
                    <div className="project-card-buttons">
                        <div>
                            <Button 
                                buttonClass="project-github-button" 
                                link={props.githubLink}
                                buttonText="View on Github"
                                target="_blank"
                            />
                        </div>
                        <div>
                            <Button 
                                buttonClass="project-site-button" 
                                link={props.liveLink}
                                buttonText="View Live Site"
                                target="_blank"
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
                            <h2 className="glitch" data-text={props.projectTitle}>{props.projectTitle}</h2>
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
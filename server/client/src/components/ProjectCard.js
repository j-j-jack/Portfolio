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

    const techSpanCreator = (tech) => {
        let stringArray = [];
        for (let i = 0; i < tech.length; i++) {
            stringArray.push(tech[i]);
        }
        return stringArray.map((letter, index) => {
            return (
                <span key={`${tech}-${index}-tech-span`} className="tech-span">{letter}</span>
            );
        })
    }

    const desSpanCreator = (string) => {
        let stringArray = [];
        for (let i = 0; i < string.length; i++) {
            stringArray.push(string[i]);
        }
        return stringArray.map((letter, index) => {
            return (
                <span key={`${string.substring[1, 9]}-${index}-des-span`} className="des-span">{letter}</span>
            );
        })
    }
    const technologiesUsed = () => {
        return (
            <div className="technologies-used">
                {props.technologies.map(
                    (technology)=> {return (
                        <div key={`${technology}${props.uniqueKey}`}>{techSpanCreator(technology)}
                        </div>
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
                        {desSpanCreator(props.projectDescription)}
                    </div>
                        {technologiesUsed()}
                    <div className="project-card-buttons">
                        <div>
                            <Button 
                                buttonClass="project-github-button" 
                                link={props.githubLink}
                                buttonText="Github"
                                target="_blank"
                            />
                        </div>
                        <div>
                            <Button 
                                buttonClass="project-site-button" 
                                link={props.liveLink}
                                buttonText="Live Site"
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
                        <img alt="screenshot of the project" className="project-image" src={projectImage}></img>
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
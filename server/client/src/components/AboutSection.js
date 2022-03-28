import React from 'react';
import Button from './Button';
import TechnologyContainer from './TechnologyContainer';
import "animate.css";
import "./css/glitch-colors.css";
import "./css/about-section.css";

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <p>
                Hi, my name is Jack and I'm passionate about web development. 
                I really enjoy the process of bringing a project from the early stages to completion. 
                I have an appreciation for many aspects of web dev from UI/UX design stages
                 to writing complex logic to manipulate data. 
                 I love working with enthusiastic and ambitious people so if that's you 
                 - contact me below! I am based in Gorey, Ireland.
            </p>
            <div className="about-section-button-container">
                <Button 
                    buttonClass="about-section-contact-button" 
                    link="#4"
                    buttonText="Contact Me"
                />
            </div>
            <div><h4>Some of the technologies I've used recently</h4></div>
            <div>
            <TechnologyContainer 
                technologies={['HTML', 'CSS', 'Bootstrap', 'Git', 'VSCode', 'ReactJS', 
                    'JavaScript', 'D3JS', 'Django', 'Python','Github', 'Heroku', 'REST', 
                    'Balsamiq', 'JSON', 'GIMP', 'Materialize', 'NodeJS', 'JQuery', 'ES6',
                    'Express', 'SQL', 'Redux', 'MongoDB', 'NPM'
                ]}
                containerClassOne="animate__animated
                        animate__infinite
                        animate__fadeInOutDown
                        animate__slow"
            />
            <div><h4>There's not millions. That's just an illusion hehe...</h4></div>
            </div>
        </div>
    );
}

export default AboutSection;

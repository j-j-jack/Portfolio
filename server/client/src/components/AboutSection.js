import React from 'react';
import TechnologyContainer from './TechnologyContainer';
import "animate.css";
import "./css/about-section.css";

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <div id="technologies-intro">
                These are some of the technologies I've used recently...
            </div>
            <div id="technologies-outro">
                There aren't millions. Thats just an illusion...
            </div>
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

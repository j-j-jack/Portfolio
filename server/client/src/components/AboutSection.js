import React from 'react';
import Button from './Button';
import TechnologyContainer from './TechnologyContainer';
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
            <div className='about-section-technologies-container'>
                <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-500ms"
                  />
                  </div>
                  <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-1s"
                  />
                  </div>
                  <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-1500ms"
                  />
                  </div>
                <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-2s"
                  />
                  </div>
                  <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-2500ms"
                  />
                  </div>
                  <div>
                 <TechnologyContainer 
                    containerClass=" 
                        animate__animated
                        animate__infinite
                        animate__flipInX
                        animate__delay-3s"
                  />
                  </div>
                  </div>
            </div>
        </div>
    )
}

export default AboutSection;
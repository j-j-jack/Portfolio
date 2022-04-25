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
                links = {{
                    'HTML' : 'https://whatwg.org/', 
                    'CSS' : 'https://www.w3.org/Style/CSS/members.en.php3',
                    'Bootstrap' : 'https://getbootstrap.com/', 
                    'Git' : 'https://git-scm.com/', 
                    'VSCode' : 'https://code.visualstudio.com/',
                    'ReactJS' : 'https://reactjs.org/', 
                    'JavaScript' : 'https://www.javascript.com/', 
                    'D3JS' : 'https://d3js.org/', 
                    'Django' : 'https://www.djangoproject.com/',
                    'Python' : 'https://www.python.org/', 
                    'Github' : 'https://github.com/', 
                    'Heroku' : 'https://www.heroku.com/', 
                    'REST': 'https://en.wikipedia.org/wiki/Representational_state_transfer', 
                    'Balsamiq' : 'https://balsamiq.com/',
                    'JSON' : 'https://www.json.org/json-en.html', 
                    'GIMP' : 'https://www.gimp.org/', 
                    'Materialize' : 'https://materializecss.com/', 
                    'NodeJS' : 'https://nodejs.org/en/', 
                    'JQuery' : 'https://jquery.com/',
                    'ES6' : 'https://en.wikipedia.org/wiki/ECMAScript', 
                    'Express' : 'https://expressjs.com/',
                    'SQL' : 'https://en.wikipedia.org/wiki/SQL', 
                    'Redux' : 'https://redux.js.org/', 
                    'MongoDB' : 'https://www.mongodb.com/',
                    'NPM' : 'https://www.npmjs.com/'
                }}
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

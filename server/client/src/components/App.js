import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { changeActiveNavTab } from '../actions';
import Navbar from './Navbar/Navbar'
import ScrollAnimation from './ScrollAnimation';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import Landing from './Landing';
import AboutSection from './AboutSection';
import { index } from 'd3';


const App = (props) => {

    const navRefOne = useRef();
    const navRefTwo = useRef();
    const navRefThree = useRef();
    const navRefFour = useRef();

    const observers = useRef();
    const sectionsInWindow = useRef();
    const changeTab = useRef();

    const windowSize = useRef();
    const intersectionThresholds = useRef();


    useEffect(() => {
        const navRefs = [navRefOne, navRefTwo, navRefThree, navRefFour];

        windowSize.current = window.innerHeight;
        
        const changeIntersectionThresholds = () => {
        let navRefsClientHeights = []; 
        intersectionThresholds.current = [];
        navRefs.forEach((ref) => {
            navRefsClientHeights.push(ref.current.offsetHeight);
        });
        
        let moreThanHalfWindow = (windowSize.current)*.44;
        navRefsClientHeights.forEach((height) => {
            
            intersectionThresholds.current.push(
                 moreThanHalfWindow/height
            );
        });
        };
        
        const intersectionSetup = () => {
            observers.current = [];
            for (let i = 0; i < intersectionThresholds.current.length; i++) {
            let options = {
                threshold: intersectionThresholds.current[i]
            }
            observers.current[i] = new IntersectionObserver(entry => {
                    if (entry[0].isIntersecting) {
                    console.log(entry[0].target.id);
                    changeTab.current(entry[0].target.id);
                    }
                }, options);

            observers.current[i].observe(navRefs[i].current);
        }
            
        }

        changeIntersectionThresholds();
        intersectionSetup();

        window.addEventListener('resize', () => {
            windowSize.current = window.innerHeight;
            changeIntersectionThresholds();
            intersectionSetup();
        })

        changeTab.current = props.changeActiveNavTab;
        sectionsInWindow.current = {1: false, 2: false, 3: false, 4: false};
        
        
        
    })

    // the refs for what the nav links to are ordered from last to first
    

    return (
        <React.Fragment>
            {/* Scroll animation here */}
            <div>
                <Navbar />
                <div className="content">
                <section id="1" ref={navRefOne} className="standard-margin">
                    <Landing />
                </section>
                <section id="2" ref={navRefTwo} className="standard-margin">
                    <h2>My Work</h2>
                    <p>Some of my work is displayed below...</p>
                    <div className="project-card-container-m-left">
                        <ProjectCard 
                            uniqueKey="1"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div className="project-card-container-m-right">
                        <ProjectCard 
                            uniqueKey="2"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="Ebook"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div className="project-card-container-m-left">
                        <ProjectCard 
                            uniqueKey="3"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                        </div>
                    <div className="project-card-container-m-right">
                        <ProjectCard 
                            uniqueKey="4"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                    </div>
                </section>
                <section id="3" ref={navRefThree} className="standard-margin">
                    <h2>About Me</h2>
                    <AboutSection />
                </section>
                <section id="4" ref={navRefFour} className="standard-margin">
                    <h2>Why not contact me?...</h2>
                    <ContactForm />
                </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default connect(null, { changeActiveNavTab })(App);
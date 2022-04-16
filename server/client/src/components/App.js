import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import "animate.css";

import { changeActiveNavTab } from '../actions';
import Navbar from './Navbar/Navbar'
import ScrollAnimation from './ScrollAnimation';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import Landing from './Landing';
import AboutSection from './AboutSection';
import DarkLightButton from './DarkLightButton';
import Parralax from './Parralax';
import { index } from 'd3';


const App = (props) => {

    const navRefOne = useRef();
    const navRefTwo = useRef();
    const navRefThree = useRef();
    const navRefFour = useRef();

    const observers = useRef();
    const changeTab = useRef();
    const windowSize = useRef();
    const intersectionThresholds = useRef();

    const fadeInRefOne = useRef();
    const fadeInRefTwo = useRef();
    const fadeInRefThree = useRef();
    const fadeInRefFour = useRef();
    const fadeInRefFive = useRef();
    const fadeInRefSix = useRef();
    const fadeInRefSeven = useRef();
    const fadeInRefEight = useRef();
    const fadeInRefNine = useRef();
    const fadeInRefTen = useRef();
    const fadeInRefEleven = useRef();


    const fadeObserver = useRef();

    

    useLayoutEffect(()=> {
        // window always refreshes at top
        window.history.replaceState({id: 1}, "", "/");
        window.history.scrollRestoration = "manual";
        window.scrollTo({ top: 0, behavior: 'instant' });
    });

    useEffect(() => {
        const navRefs = [navRefOne, navRefTwo, navRefThree, navRefFour];
        changeTab.current = props.changeActiveNavTab;
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
            let options = {};
                if (intersectionThresholds.current[i] <= 1.0) {
                options = {
                    threshold: intersectionThresholds.current[i]
                }
            } else {
                options = {
                    threshold: 1.0
                }
            }
            observers.current[i] = new IntersectionObserver(entry => {
                    if (entry[0].isIntersecting) {
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
        });

        setTimeout(()=> {
            fadeInRefEight.current.className += " animate__animated animate__fadeInDown";
            setTimeout(() => {
                    fadeInRefEight.current.style.pointerEvents = 'auto';
                }, 1000);
        }, 3000)

        setTimeout(()=> {
            const fadeInRefs = [fadeInRefOne.current, fadeInRefTwo.current, fadeInRefThree.current,
                fadeInRefFour.current, fadeInRefFive.current, fadeInRefSix.current, 
                fadeInRefSeven.current, fadeInRefNine.current, fadeInRefTen.current,
                fadeInRefEleven.current];

            const fadeDict = {
                "s2h": "fadeIn",
                "s2sh": "fadeIn",
                "pc1": "fadeInLeft",
                "pc2": "fadeInRight", 
                "pc3": "fadeInLeft",
                "pc4": "fadeInRight",
                "s3h": "bounceIn", 
                "s3": "fadeIn", 
                "n": "fadeInDown",
                "s4h": "fadeIn",
                "s4": "fadeInUp"
            };

            function delay(n){
            // https://www.delftstack.com/howto/javascript/javascript-wait-for-x-seconds/
                return new Promise(function(resolve){
                    setTimeout(resolve,n*1000);
                });
            }

            fadeObserver.current = new IntersectionObserver((entries) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {
                        await delay(.25);
                        entry.target.className += ` animate__animated animate__${fadeDict[entry.target.id]}`;
                        fadeObserver.current.unobserve(entry.target);
                        setTimeout(() => {
                            entry.target.style.pointerEvents = 'auto';
                        }, 1000);
                    }
                });
            });

            fadeInRefs.forEach((ref) => {
                fadeObserver.current.observe(ref);
            });
            document.body.style.overflowY = "overlay";
            document.body.style.pointerEvents = "auto";
        }, 4000);

    })
    

    return (
        <React.Fragment>
            
            {/* Scroll animation here */}
            <div 
                className="dark-button-container animate__animated animate__fadeIn animate__delay-4s">
                    <DarkLightButton />
                </div>
            <div id="home/">
                <Parralax>
                <div id="n" className="faded-out" ref={fadeInRefEight}>
                    <Navbar/>
                </div>
                <div className="content">
                <section id="1" ref={navRefOne}>
                    <Landing />
                </section>
                <section id="2" ref={navRefTwo} className="standard-margin">
                    <h2 className="faded-out" ref={fadeInRefOne} id="s2h">My Work</h2>
                    <p id="s2sh" className="faded-out" ref={fadeInRefNine}>
                        Some of my work is displayed below...
                    </p>
                    <div ref={fadeInRefTwo} id="pc1" className="project-card-container-m-left faded-out">
                        <ProjectCard 
                            uniqueKey="1"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div ref={fadeInRefThree} id="pc2" className="project-card-container-m-right faded-out">
                        <ProjectCard 
                            uniqueKey="2"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="Ebook"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div ref={fadeInRefFour} id="pc3" className="project-card-container-m-left faded-out">
                        <ProjectCard 
                            uniqueKey="3"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectDescription="This is the project description. It is a very good project"
                            technologies = {["Django", "Stripe Api", "S3", "jQuery", "Javascript"]}
                        />
                        </div>
                    <div ref={fadeInRefFive} id="pc4" className="project-card-container-m-right faded-out">
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
                    <h2 className="faded-out" ref={fadeInRefSix} id="s3h">About Me</h2>
                    <div className="faded-out" id="s3" ref={fadeInRefSeven}>
                        <AboutSection />
                    </div>
                </section>
                <section id="4" ref={navRefFour} className="standard-margin">
                    <h2 className="faded-out" id="s4h" ref={fadeInRefTen}>
                        Why not contact me?...
                    </h2>
                    <div className="faded-out" id="s4" ref={fadeInRefEleven}>
                        <ContactForm />
                    </div>
                </section>
                </div>
                </Parralax>
            </div>
        </React.Fragment>
    );
};

export default connect(null, { changeActiveNavTab })(App);
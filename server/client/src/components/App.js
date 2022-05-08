import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import "animate.css";

import { changeActiveNavTab } from '../actions';
import Navbar from './Navbar/Navbar'
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import Landing from './Landing';
import AboutSection from './AboutSection';
import DarkLightButton from './DarkLightButton';
import Parralax from './Parralax';
import LinkButton from './LinkButton';

import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import eBookClubImage from "../assets/images/e-book-club.PNG";
import ghostPostImage from "../assets/images/ghost-post.PNG";
import munsterWavesImage from "../assets/images/munster-waves.PNG";


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
    const fadeInRefTwelve = useRef();


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
        // the code below calculates the threshold for each section to be intersecting
        // because the threshold is set to 51 (ie. 51%). Each section in the project 
        // should take at least 51% min of the viewport height on all screen sizes
        let moreThanHalfWindow = (windowSize.current)*.51;
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
                    console.log(entry);
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
                fadeInRefFour.current,fadeInRefFive.current, fadeInRefSix.current, 
                fadeInRefSeven.current, fadeInRefNine.current, fadeInRefTen.current,
                fadeInRefEleven.current, fadeInRefTwelve.current];

            const fadeDict = {
                "s2h": "bounceIn",
                "s2sh": "bounceIn",
                "pc1": "fadeInLeft",
                "pc2": "fadeInRight", 
                "pc3": "fadeInLeft",
                "pc4": "fadeInRight",
                "s3h": "zoomIn", 
                "s3sh": "zoomIn",
                "s3": "fadeIn", 
                "n": "fadeInDown",
                "s4h": "backInLeft",
                "s4": "backInRight",
                "bgl": "fadeInUp"
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
                        await delay(.5);
                        let className = entry.target.className;
                        className = className.replace("faded-out", "");
                        entry.target.className = className + ` animate__animated animate__slow animate__${fadeDict[entry.target.id]}`;
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
            <div 
                className="links-box animate__animated animate__fadeIn animate__delay-4s">
                </div>
            <div 
                className="dark-button-container animate__animated animate__fadeIn animate__delay-4s">
                    <DarkLightButton />
                </div>
            <div 
                className="github-button-container animate__animated animate__fadeIn animate__delay-4s">
                    <LinkButton 
                        linkName="Github"
                        image={github}
                        color="--github-black"
                        colorTwo="--github-white"
                        link="https://github.com/j-j-jack"
                    />
                </div>
            <div 
                className="linkedin-button-container animate__animated animate__fadeIn animate__delay-4s">
                    <LinkButton 
                        linkName="LinkedIn"
                        image={linkedin}
                        color="--linkedin-blue"
                        colorTwo="--linkedin-white" 
                        link="https://www.linkedin.com/in/jack-o-sullivan-1122a8205/"
                    />
                </div>
            <div id="home/">
                <div id="n" className="faded-out" ref={fadeInRefEight}>
                    <Navbar/>
                </div>
                <Parralax>
                <div className="content">
                <section className="section-one" id="1" ref={navRefOne}>
                    <Landing />
                </section>
                <section id="2" ref={navRefTwo}>
                    <h2 
                        className="faded-out section-heading box-shadow" 
                        ref={fadeInRefOne}  
                        id="s2h">
                            My Work
                        </h2>
                    <p 
                        id="s2sh" 
                        className="faded-out section-sibling" 
                        ref={fadeInRefNine}
                    >
                        As of the start of 2021, I had no basically no knowledge of web development whatsoever.
                        I have displayed a small selection of projects that I have completed since then to showcase
                        my progress. Feel free to visit my <a 
                            target="_blank" rel="noreferrer" 
                            className="github-work-link" 
                            href="http://github.com">
                                Github
                            </a> page.
                    </p>
                    <div 
                        ref={fadeInRefTwo} 
                        id="pc1" 
                        className="project-card-container-m-left faded-out section-sibling box-shadow"
                    >
                        <ProjectCard 
                            uniqueKey="1"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectImage={eBookClubImage}
                            projectDescription="E-commerce site created using Django and Stripe. The users of the site can purchase e-books as well as subscribe to the monthly book-clubs."
                            technologies = {["Django", "Stripe","GIMP", "AWS", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div 
                        ref={fadeInRefThree} 
                        id="pc2" 
                        className="project-card-container-m-right faded-out section-sibling box-shadow"
                    >
                        <ProjectCard 
                            uniqueKey="2"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="Ghost Post"
                            projectImage={ghostPostImage}
                            projectDescription="Social media website for those interested in paranormal Activity. Users Can create profiles and share their encounters with the paranormal."
                            technologies = {["Flask", "Python", "MongoDB", "jQuery", "Javascript"]}
                        />
                    </div>
                    <div 
                        ref={fadeInRefFour} 
                        id="pc3" 
                        className="project-card-container-m-left faded-out section-sibling box-shadow"
                        >
                        <ProjectCard 
                            uniqueKey="3"
                            githubLink="https://github.com"
                            liveLink="https://www.youtube.com"
                            projectTitle="E-book Club"
                            projectImage={munsterWavesImage}
                            projectDescription="Surf forecast website for the province of Muster. Users of the site can check out the forecast for the week ahead for the best beaches in the area."
                            technologies = {["Stormglass", "Leaflet", "JQuery", "EmailJS", "Javascript"]}
                        />
                        </div>
                </section>
                <section id="3" ref={navRefThree}>
                    <h2 
                        className="faded-out section-heading box-shadow" 
                        ref={fadeInRefSix} 
                        id="s3h">
                            About Me
                    </h2>
                    <p 
                        className=" section-sibling faded-out" 
                        ref={fadeInRefFive} 
                        id="s3sh">
                        Hi, my name is Jack and I'm passionate about web development. 
                        I really enjoy the process of bringing a project from the early stages to completion. 
                        I have an appreciation for many aspects of web dev from UI/UX design stages
                        to writing complex logic to manipulate data. 
                        I love working with enthusiastic and ambitious people so if that's you 
                        - contact me below! I am based in Gorey, Ireland. <a 
                            className="contact-scroll-link" 
                            href="#4">
                                Scroll down
                            </a> to contact me.
                    </p>  
                    <div className="faded-out box-shadow" id="s3" ref={fadeInRefSeven}>
                        <AboutSection />
                    </div>
                </section>
                <section id="4" ref={navRefFour}>
                    <h2 
                        className="section-heading faded-out box-shadow" 
                        id="s4h" 
                        ref={fadeInRefTen}>
                        Why not contact me?...
                    </h2>
                    <div className="faded-out box-shadow" id="s4" ref={fadeInRefEleven}>
                        <ContactForm />
                    </div>
                </section>
                <div 
                    id="bgl"
                    ref={fadeInRefTwelve}
                    className="faded-out bottom-github-link-container"
                >
                    <h4 className="bottom-github-link-heading">
                        This project was created using React, D3.js and Animate.css.
                    </h4>
                    <h5>View the Github repo<span> </span>
                        <a 
                            className="bottom-github-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/j-j-jack/Portfolio/tree/master">
                                here
                            </a> </h5>
                </div>
                </div>
                </Parralax>
            </div>
        </React.Fragment>
    );
};

export default connect(null, { changeActiveNavTab })(App);
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { changeActiveNavTab } from '../actions';

import Navbar from './Navbar/Navbar'
import ScrollAnimation from './ScrollAnimation';
import Lorem from './Lorem';
import ProjectCard from './ProjectCard';
import Button from './Button';

const App = (props) => {

    const navRefOne = useRef();
    const navRefTwo = useRef();
    const navRefThree = useRef();
    const navRefFour = useRef();

    // the refs for what the nav links to are ordered from last to first
    const navRefs = [navRefFour, navRefThree, navRefTwo, navRefOne];

    // https://javascript.info/coordinates
    const getDistanceFromTop = (elem) => {
        let box = elem.getBoundingClientRect();
        return box.top + window.pageYOffset;
    }

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        const firstNavRef = [...navRefs].pop();
        if (scrollPosition <= getDistanceFromTop(firstNavRef.current)) {
             props.changeActiveNavTab(1);
        }
        else {
            for (var ref in navRefs) {
            if (scrollPosition >= getDistanceFromTop(navRefs[ref].current)-128) {
                props.changeActiveNavTab(navRefs.length-ref);
                return
            }
        }
        }
    });

    return (
        <React.Fragment>
            {/* Scroll animation here */}
            <div>
                <Navbar />
                <div className="content">
                <section ref={navRefOne} className="standard-margin">
                    <h2 id="1">Section One</h2>
                    <Lorem />
                </section>
                <section ref={navRefTwo} className="standard-margin">
                    <h2 id="2">Section Two</h2>
                    <div className="project-cards-container">
                        <ProjectCard uniqueKey="1"/>
                        <ProjectCard uniqueKey="2"/>
                        <ProjectCard uniqueKey="3"/>
                        <ProjectCard uniqueKey="4"/>
                    </div>
                </section>
                <section ref={navRefThree} className="standard-margin">
                    <h2 id="3">Section Three</h2>
                    <Lorem />
                </section>
                <section ref={navRefFour} className="standard-margin">
                    <h2 id="4">Section Four</h2>
                    <Lorem />
                </section>
                </div>
            </div>
        </React.Fragment>
    );
};

export default connect(null, { changeActiveNavTab })(App);
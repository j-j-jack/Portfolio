import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { changeActiveNavTab } from '../actions';

import Navbar from './Navbar/Navbar'
import Lorem from './Lorem';

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

    const scrollRead = (elem) => {
        console.log(getDistanceFromTop(elem));
    }

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        const firstNavRef = [...navRefs].pop();
        if (scrollPosition <= getDistanceFromTop(firstNavRef.current)) {
             props.changeActiveNavTab(1);
        }
        else {
            for (var ref in navRefs) {
            if (scrollPosition >= getDistanceFromTop(navRefs[ref].current)) {
                props.changeActiveNavTab(navRefs.length-ref);
                return
            }
        }
        }
    });

    return <div>
        <Navbar />
        <div className="content">
        <div 
            ref={navRefOne} onClick={() => scrollRead(navRefOne.current)}
            data-link="1"
        >
                <Lorem />
                </div>
        <div ref={navRefTwo} onClick={() => scrollRead(navRefTwo.current)}><Lorem /></div>
        <div ref={navRefThree} onClick={() => scrollRead(navRefThree.current)}><Lorem /></div>
        <div ref={navRefFour} onClick={() => scrollRead(navRefFour.current)}><Lorem /></div>
        </div>
    </div>;
};

export default connect(null, { changeActiveNavTab })(App);
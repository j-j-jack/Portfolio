import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import "../css/scroll-animation.css";

const ScrollAnimation = () => {
    const topSvg = useRef();
    const bottomSvg = useRef();

    let body = document.body;
    // let max = 0;
    // let min = null;
    let htmlHeight = null;
    
    const calculateHtmlHeight = () => {
        htmlHeight = window.getComputedStyle(body).getPropertyValue('height');
        htmlHeight = parseInt(htmlHeight, 10);
        console.log(htmlHeight); 
    }

    useEffect( () => {
        calculateHtmlHeight();
    }, []);

    window.addEventListener('resize', calculateHtmlHeight);

    const gaussian = (min, max) => {
        // https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
        // adapted from Maxwell Collard and Mahdi on Stack Overflow
	    var u = 0, v = 0;
        while(u === 0) u = Math.random(); 
        while(v === 0) v = Math.random();
	    var w = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	    while(w < -3.5 || w > 3.5) {
	        u=0;
	        v=0;
	        while(u === 0) u = Math.random();
	        while(v === 0) v = Math.random();
	        w = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	    }
        w=w+3.5
        w=w/7;
        // convert values to have mean 0.5, range 0-1
        const range = max - min;
        w = w * range;
        w = w + min;
        return w;
    }
    
    const append = () => {
        d3.select(topSvg.current).append('circle').attr('cx', '20%' ).attr('cy', '20%').attr('r', 20).style('fill', 'gold').transition().duration(500).remove();
    }
    const appendTwo = () => {
        d3.select(bottomSvg.current).append('circle').attr('cx', '20%' ).attr('cy', '20%').attr('r', 20).style('fill', 'gold').transition().duration(500).remove();
    }

    return (
        <React.Fragment>
        <div className="top-animation">
            <svg
                ref={topSvg}
                className="top-svg"
                onClick={() => append()}
            >
            </svg>    
        </div>
        <div className="bottom-animation">
            <svg
                ref={bottomSvg}
                className="bottom-svg"
                onClick={() => appendTwo()}
            >
            </svg>  
        </div>
        </React.Fragment>
    );
};

export default ScrollAnimation;
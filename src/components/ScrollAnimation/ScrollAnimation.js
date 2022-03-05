import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import "../css/scroll-animation.css";

const ScrollAnimation = () => {
    const topSvg = useRef();
    const bottomSvg = useRef();

    const body = document.body;
    let htmlHeight;
    let speedRelativeToBody;
    let isPositive;
    
    const calculateHtmlHeight = () => {
        htmlHeight = window.getComputedStyle(body).getPropertyValue('height');
        htmlHeight = parseInt(htmlHeight, 10);
        console.log(htmlHeight);
    }
    
    useEffect(() => {
    calculateHtmlHeight()
    });

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

    const animation = (speed, top) => {
        const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
            'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];

        if (top) {
            let x = parseInt(Math.random() * 100);
            x = x.toString() + '%';
            console.log('x', x);
            d3.select(topSvg.current).append('line')
                .style("stroke", "lightgreen").style("stroke-width", 10).attr("x1", x)
                    .attr("y1", '0%').attr("x2", x).attr("y2", '50%')
                        .transition().duration(500).remove();
        } else {
            let x = parseInt(Math.random() * 100);
            x = x.toString() + '%';
            console.log('x', x);
            d3.select(bottomSvg.current).append('line')
                .style("stroke", "lightgreen").style("stroke-width", 10).attr("x1", x)
                    .attr("y1", '0%').attr("x2", x).attr("y2", '50%')
                        .transition().duration(500).remove();
        }
    }

        // min = 0 max = 0.65 approx
        let lastPosition = window.pageYOffset;
        let timeBetweenMeasures = 20;
        let measure = true;
        document.addEventListener('scroll', (e) => {
            if (measure) {
            measure = false;
            setTimeout(reMeasure, timeBetweenMeasures);
            let newPosition = window.pageYOffset;
            let speed = lastPosition - newPosition;
            if (speed >= 0) {
                isPositive = true
            }
            else {
                isPositive = false;
            }
            speed = Math.abs(speed);
            lastPosition = newPosition;
            speedRelativeToBody = speed/htmlHeight;
            }
            console.log('is positive:', isPositive);
            console.log('speed', speedRelativeToBody);
            animation(speedRelativeToBody, isPositive);
        });

        const reMeasure = () => {
                measure = true;
            }

    window.addEventListener('resize', calculateHtmlHeight);

    return (
        <React.Fragment>
        <div className="top-animation">
            <svg
                ref={topSvg}
                className="top-svg"
            >
            </svg>    
        </div>
        <div className="bottom-animation">
            <svg
                ref={bottomSvg}
                className="bottom-svg"
            >
            </svg>  
        </div>
        </React.Fragment>
    );
};

export default ScrollAnimation;
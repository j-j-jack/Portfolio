import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import "./css/scroll-animation.css";

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
        if (speed < .0065) {
            speed = .0065;
        }

        const numberOfLines = parseInt(gaussian(speed + 3, (speed*250)+8));
        const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
            'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
        if (!top) {
            for (let i=0; i<numberOfLines; i++) {
                let x = Math.random() * 100;
                x = x.toString() + '%';
                let yOne = gaussian(-5, 10);
                let length = yOne + gaussian(0, speed * 80);
                length = length.toString() + '%';
                yOne = yOne.toString() + '%';
                let duration = gaussian(speed + 100, (speed*1500) + 100);
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(topSvg.current).append('line')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x1", x)
                        .attr("y1", yOne).attr("x2", x).attr("y2", length)
                            .transition().duration(duration).remove();
            }
        } else {
            for (let i=0; i<numberOfLines; i++) {
                let x = Math.random() * 100;
                x = x.toString() + '%';
                let yOne = gaussian(-5, 10);
                let length = (100 - yOne) - (gaussian(0, speed * 80));
                console.log(length);
                length = length.toString() + '%';
                yOne = (yOne * - 1) + 100;
                yOne = yOne.toString() + '%';
                let duration = gaussian(speed + 100, (speed*1500) + 100);
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(bottomSvg.current).append('line')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x1", x)
                        .attr("y1", yOne).attr("x2", x).attr("y2", length)
                            .transition().duration(duration).remove();
            }
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
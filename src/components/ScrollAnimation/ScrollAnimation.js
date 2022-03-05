import React, { useRef } from 'react';
import "../css/scroll-animation.css"

const ScrollAnimation = () => {
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


    return (
        <React.Fragment>
        <div className="top-animation"></div>
        <div className="bottom-animation"></div>
        </React.Fragment>
    );
};

export default ScrollAnimation;
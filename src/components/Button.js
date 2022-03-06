import React, { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';
import "./css/button.css";
import "./css/scroll-animation.css"


const Button = (props) => {
    const [hover, setHover] = useState(false);
    let lineCount = useRef(0);
    let draw=false
    const buttonRef = useRef();

    const hoverEffect = () => {
            console.log('jhjshjhdj')
            if(hover && lineCount.current<150) {
            const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
                let x = Math.random() * 100;
                x = x.toString() + '%';
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(buttonRef.current).append('line')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x1", x)
                        .attr("y1", 0).attr("x2", x).attr("y2", '100%');
                lineCount.current+=1;
                setTimeout(hoverEffectTwo, 500);
            }
        }

        const hoverEffectTwo = () => {
            console.log(hover)
            if(hover && lineCount.current<150) {
                console.log('hello');
            const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
                let x = Math.random() * 100;
                x = x.toString() + '%';
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(buttonRef.current).append('line')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x1", x)
                        .attr("y1", 0).attr("x2", x).attr("y2", '100%');
                lineCount.current+=1;
                console.log(lineCount.current);
                setTimeout(hoverEffect, 500);
        }
        }
    
    hoverEffect();

    return (
        <button
            className={props.buttonClass}
        >
            <div className={`${props.buttonClass}-image button-image`}></div>
            <a href={props.link} target="_blank" rel="noreferrer">{props.buttonText}</a>
            <svg
                onMouseOver={() => {setHover(true)}}
                onChange={() =>{ setHover(true)}}
                onMouseOut={()=> {console.log('mouseout'); setHover(false)}}
                className="button-svg"
                ref={buttonRef}>
            </svg>
        </button>
        );
};

export default Button;
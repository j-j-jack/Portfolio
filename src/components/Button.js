import React, { useRef, useState } from 'react';
import * as d3 from 'd3';
import "./css/button.css";
import "./css/scroll-animation.css"


const Button = (props) => {
    const [hover, setHover] = useState(false);
    let lineCount = useRef(0);
    const buttonRef = useRef();
    const timeouts = useRef([]);
    // Michael Berkowski Stack Overflow - https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts
    
    
    const hoverEffect = () => {
            console.log('jhjshjhdj')
            if(hover && lineCount.current<150) {
            const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
                let x = Math.random() * 100;
                x = x.toString() + '%'
                let y = Math.random() * 100;
                y = y.toString() + '%';;
                let width = Math.random() * 5;
                width = width.toString() + '%';
                let height = Math.random() * 35;
                height = height.toString() + '%';
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(buttonRef.current).append('rect')
                    .attr('x', x).attr('y', y)
                        .attr('width', width).attr('height', height)
                            .attr('class', randomColor).attr('fill', '#69a3b2');
                lineCount.current+=1;
                timeouts.current.push(setTimeout(hoverEffectTwo, 20));
            }
            else if (!hover) {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
            }
                d3.select(buttonRef.current).selectAll('*').remove();
                lineCount.current=0;
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
                d3.select(buttonRef.current).append('rect')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x", x)
                        .attr("y", 0).attr("wdith", '5%').attr("height", '50%').attr('fill', '#69a3b2');
                lineCount.current+=1;
                console.log(lineCount.current);
                timeouts.current.push(setTimeout(hoverEffect, 20));
        }
        else if (!hover) {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
            }
        }
        }
        
        const handleMouseOut = () => {
            console.log('mouseout'); setHover(false);
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
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
                onMouseOut={()=> {handleMouseOut()}}
                className="button-svg"
                ref={buttonRef}>
            </svg>
        </button>
        );
};

export default Button;
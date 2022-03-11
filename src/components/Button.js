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
            if(hover && lineCount.current<50) {
            const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
                let x = Math.random() * 100;
                let y = Math.random() * 100;
                if (x > 10 && x < 90)
                {
                if (y <= 50) {
                    y = y/5;
                } else {
                    y = ((y - 50)/5) + 90;
                }
                }
                x = x.toString() + '%'
                y = y.toString() + '%';;
                let width = Math.random() * 2.5;
                width = width.toString() + '%';
                let height = Math.random() * 20;
                height = height.toString() + '%';
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(buttonRef.current).append('rect')
                    .attr('x', x).attr('y', y)
                        .attr('width', width).attr('height', height)
                            .attr('class', randomColor).attr('fill', '#69a3b2');
                lineCount.current+=1;
                let randomInterval = Math.random()/100 + .001;
                timeouts.current.push(setTimeout(hoverEffectTwo, randomInterval));
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
            if(hover && lineCount.current<50) {
            const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
                let x = Math.random() * 100;
                let y = Math.random() * 100;
                if (x > 10 && x < 90)
                {
                if (y <= 50) {
                    console.log('xy');
                    y = y/5;
                } else {
                    y = ((y - 50)/5) + 90;
                }
                }
                x = x.toString() + '%'
                y = y.toString() + '%';;
                let width = Math.random() * 2;
                width = width.toString() + '%';
                let height = Math.random() * 20;
                height = height.toString() + '%';
                let randomColor = colors[Math.floor(Math.random() * 8)];
                d3.select(buttonRef.current).append('rect')
                    .attr("class", randomColor).style("stroke-width", 2).attr("x", x)
                        .attr("y", 0).attr("wdith", width).attr("height", height).attr('fill', '#69a3b2');
                lineCount.current+=1;
                let randomInterval = Math.random()/100 + .001;
                timeouts.current.push(setTimeout(hoverEffect, randomInterval));
        }
        else if (!hover) {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
            }
        }
        }
        
        const handleMouseOut = () => {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
        }
        setHover(false);
        }
    
    hoverEffect();

    return (
        <button
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={()=> {handleMouseOut()}}
            className={props.buttonClass}
        >
            <div className="button-content">
            <a href={props.link} target="_blank" rel="noreferrer">
            <div className="button-link-content">
                <div className={`${props.buttonClass}-image button-image`}></div>
                <div className="button-text">{props.buttonText}</div>
            </div>
            </a>
            </div>
            <svg
                className="button-svg"
                ref={buttonRef}>
            </svg>
        </button>
        );
};

export default Button;
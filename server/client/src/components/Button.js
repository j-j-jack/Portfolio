import React, { useRef, useState } from 'react';
import * as d3 from 'd3';
import "./css/button.css";

const Button = (props) => {
    // button takes a className for extra styling, the button text and icon as props
    // works witht the button.css stylesheet
    const [hover, setHover] = useState(false);
    let lineCount = useRef(0);
    const buttonRef = useRef();
    const buttonText = useRef();
    const timeouts = useRef([]);
    // Michael Berkowski Stack Overflow - https://stackoverflow.com/questions/8860188/javascript-clear-all-timeouts
    
    const buttonGlitch = () => {
        // colors from the glitch-colors.css stylesheet in the public directory
        const colors = ['glitch-white', 'glitch-red', 'glitch-yellow',
                'glitch-blue', 'glitch-pink', 'glitch-black', 'glitch-aqua', 'glitch-green'];
        let cx = Math.random() * 100;
        let cy = Math.random() * 100;
            if (cx > 10 && cx < 90) {
                if (cy <= 50) {
                    cy = cy/5;
                } else {
                    cy = ((cy - 50)/5) + 90;
                }
            }
        cx = cx.toString() + '%'
        cy = cy.toString() + '%';;
        let width = Math.random() * 2;
        width = width.toString() + '%';
        let randomColor = colors[Math.floor(Math.random() * 8)];
        d3.select(buttonRef.current).append('circle')
            .attr("class", randomColor).attr('r', width).attr("cx", cx)
                .attr("cy", cy);
        lineCount.current+=1;
    }

    const hoverEffect = () => {
        if(hover && lineCount.current<50) {
            buttonGlitch();
            let randomInterval = Math.random()/100 + .001;
            timeouts.current.push(setTimeout(hoverEffectTwo, randomInterval));
        } else if (!hover) {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
            }
            d3.select(buttonRef.current).selectAll('*').remove();
            lineCount.current=0;
        }
    }


    const hoverEffectTwo = () => {
        if(hover && lineCount.current<50) {
            buttonGlitch();
            let randomInterval = Math.random()/100 + .001;
            timeouts.current.push(setTimeout(hoverEffect, randomInterval));
        } else if (!hover) {
            for (var i=0; i<timeouts.current.length; i++) {
                clearTimeout(timeouts.current[i]);
            }
        }
    }
        

    const handleMouseLeave = () => {
        for (var i=0; i<timeouts.current.length; i++) {
            clearTimeout(timeouts.current[i]);
        }
        setHover(false);
    }
    
    const changeFontColorWhite = () => {
        buttonText.current.style.color="var(--glitch-white)";
    }

    const changeFontColorBlack = () => {
        buttonText.current.style.color="var(--glitch-black)";
    }


    hoverEffect();

    return (
        <button
            onMouseEnter={() => {setHover(true); changeFontColorWhite()}}
            onMouseLeave={()=> {handleMouseLeave(); changeFontColorBlack()}}
            className={props.buttonClass} 
        >
            <div className="button-content">
            <a href={props.link} target={props.target} rel="noreferrer">
            <div className="button-link-content">
                <div className={`${props.buttonClass}-image button-image`}></div>
                <div className="button-text"><span ref={buttonText}>{props.buttonText}</span></div>
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
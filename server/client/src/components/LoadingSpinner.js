import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import "./css/loading-spinner.css";

const LoadingSpinner = (props) => {
    const svgRefOne = useRef();
    const svgRefTwo = useRef();
    const svgRefThree = useRef();
    const textRef = useRef();
    const outerRef = useRef();


    
    useEffect(() => {

        const setOuterDimensions = () => {
            // height of form in pxs
            let height = 642.39;
            let width = window.getComputedStyle(document.body).getPropertyValue('width');
            width = parseInt(width, 10) - 128;
            let dimension = 0;
            if (width > height) {
                dimension = height;
            } else {
                dimension = width;
            }
            outerRef.current.style.height = `${dimension}px`;
            outerRef.current.style.height = `${dimension}px`;
        }

        setOuterDimensions();
        window.addEventListener('resize', () => setOuterDimensions());

        // set random rotation for svgs

        let rotateSpeed = 1000 + parseInt(Math.random()*5000);
        svgRefOne.current.style.setProperty('-webkit-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefOne.current.style.setProperty('-moz-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefOne.current.style.setProperty('animation' , `spin ${rotateSpeed}ms linear infinite`);
        rotateSpeed = 1000 + parseInt(Math.random()*5000);
        svgRefTwo.current.style.setProperty('-webkit-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefTwo.current.style.setProperty('-moz-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefTwo.current.style.setProperty('animation' , `spin ${rotateSpeed}ms linear infinite`);
        rotateSpeed = 1000 + parseInt(Math.random()*5000);
        svgRefThree.current.style.setProperty('-webkit-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefThree.current.style.setProperty('-moz-animation' , `spin ${rotateSpeed}ms linear infinite`);
        svgRefThree.current.style.setProperty('animation' , `spin ${rotateSpeed}ms linear infinite`);

        let durationOne = 1000 + parseInt(Math.random()*1000);
        let durationTwo = 1000 + parseInt(Math.random()*1000);
        let durationThree = 1000 + parseInt(Math.random()*1000);
        const tOne = d3.transition()
                .duration(durationOne)
                    .ease(d3.easeLinear);
        const tTwo = d3.transition()
                .duration(durationTwo)
                    .ease(d3.easeLinear);
        const tThree = d3.transition()
                .duration(durationThree)
                    .ease(d3.easeLinear);

        
        const transitionLoopOne = (node, cx, cy) => {
            d3.select(textRef.current).attr('class', 'loading-text glitch-blue');
            d3.select(node).transition()
                .duration(durationOne)
                    .ease(d3.easeLinear).style('opacity', '0').attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).on('end', () => transitionLoopTwo(node, cx, cy));
        }
        const transitionLoopTwo = (node, cx, cy) => {
            d3.select(node).transition()
                .duration(durationOne)
                    .ease(d3.easeLinear).style('opacity', '1').attr("r", `${Math.random()*2}%`).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopOne(node, cx, cy));
        }

        const transitionLoopThree = (node, cx, cy) => {
            d3.select(textRef.current).attr('class', 'loading-text glitch-green');
            d3.select(node).transition()
                .duration(durationTwo)
                    .ease(d3.easeLinear).style('opacity', '0').attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).on('end', () => transitionLoopFour(node, cx, cy));
        }
        const transitionLoopFour = (node, cx, cy) => {
            d3.select(node).transition()
                .duration(durationTwo)
                    .ease(d3.easeLinear).style('opacity', '1').attr("r", `${Math.random()*2}%`).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopThree(node, cx, cy));
        }

        const transitionLoopFive = (node, cx, cy) => {
            d3.select(textRef.current).attr('class', 'loading-text glitch-pink');
            d3.select(node).transition()
                .duration(durationThree)
                    .ease(d3.easeLinear).style('opacity', '0').attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).on('end', () => transitionLoopSix(node, cx, cy));
        }
        const transitionLoopSix = (node, cx, cy) => {
            d3.select(node).transition()
                .duration(1200)
                    .ease(d3.easeLinear).style('opacity', '1').attr("r", `${Math.random()*2}%`).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopFive(node, cx, cy));
        }
        for (let i=0; i<48; i++){
        let angleInRadians = (i*7.5) * Math.PI/180;
        let cx = 50 + (40 * (Math.cos(angleInRadians)));
        let cy = 50 + (40 * (Math.sin(angleInRadians)));
        let circleOne = d3.select(svgRefOne.current).append('circle').attr('z-index', parseInt(1 + Math.random()* 288)).attr('class', `glitch-blue circle-class`)
            .attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).transition(tOne).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopOne(circleOne._groups[0][0], cx, cy));
        }
        for (let i=0; i<48; i++){
        let angleInRadians = (i*7.5) * Math.PI/180;
        let cx = 50 + (35 * (Math.cos(angleInRadians)));
        let cy = 50 + (40 * (Math.sin(angleInRadians)));
        let circleTwo = d3.select(svgRefTwo.current).append('circle').attr('z-index', parseInt(1 + Math.random()* 288)).attr('class', `glitch-green circle-class`)
            .attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).transition(tTwo).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopThree(circleTwo._groups[0][0], cx, cy) );
        }
        for (let i=0; i<48; i++){
        let angleInRadians = (i*7.5) * Math.PI/180;
        let cx = 50 + (30 * (Math.cos(angleInRadians)));
        let cy = 50 + (40 * (Math.sin(angleInRadians)));
        let circleThree = d3.select(svgRefThree.current).append('circle').attr('z-index', parseInt(1 + Math.random()* 288)).attr('class', `glitch-pink circle-class`)
            .attr("r", `${Math.random()*2}%`).attr('cx', `${cx}%`).attr('cy', `${cy}%`).transition(tThree).attr('cx', `${100-cx}%`).attr('cy', `${100-cy}%`).on('end', () => transitionLoopFive(circleThree._groups[0][0], cx, cy));
        }
    }, []);
    return (
            <div ref={outerRef} className="loading-spinner-outer">
                <div className="loading-spinner-container">
                    <div ref={textRef} className="loading-text loading-text-color">{props.text}</div>
                    <svg ref={svgRefOne} className='loading-spinner-svg-one'></svg>
                    <svg ref={svgRefTwo} className='loading-spinner-svg-two'></svg>
                    <svg ref={svgRefThree} className='loading-spinner-svg-three'></svg>
                </div>
            </div>
            );

};

export default LoadingSpinner;
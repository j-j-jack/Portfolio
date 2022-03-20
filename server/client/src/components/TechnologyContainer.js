import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';

const TechnologyContainer = (props) => {
    const techRefOne = useRef();
    const techRefTwo = useRef();
    useEffect(() => {
        const fadeOne = (ref) => {
            setTimeout(() => {
                d3.select(ref.current)
                    .attr('class', 'animate__animated animate__infinite animate__fadeOutDown animate__slow');
                fadeTwo(ref);
            }, 1000)
        }

        const fadeTwo = (ref) => {
            setTimeout(() => {
                d3.select(ref.current)
                    .attr('class', 'animate__animated animate__infinite animate__fadeInDown animate__slow');
                fadeOne(ref);
            }, 1000)
        }
        console.log('tech One fade out first');
        fadeOne(techRefOne);
        setInterval(()=> {
            console.log('tech two fade out first');
            fadeOne(techRefTwo);
        }, 1000);
        },[]);
    return (
        <div className="technology-container-outer">
            <div className="technology-container-inner">
                <div ref={techRefOne} className={props.containerClassOne}>{props.technologyOne}</div>
            </div> 
            <div className="technology-container-inner">
                <div ref={techRefTwo} className={props.containerClassTwo}>{props.technologyTwo}</div>
            </div>    
        </div>
    );
};

export default TechnologyContainer;
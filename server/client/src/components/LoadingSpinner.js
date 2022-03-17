import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import "./css/loading-spinner.css";

const LoadingSpinner = () => {
    const svgRef = useRef();
    useEffect(() => {
        for (let i=0; i<24; i++){
        console.log(svgRef.current.clientWidth);
        let angleInRadians = (i*15) * Math.PI/180;
        let cx = 50 + (40 * (Math.cos(angleInRadians)));
        let cy = 50 + (40 * (Math.sin(angleInRadians)));
        d3.select(svgRef.current).append('circle').attr('class', i).style("stroke", "black").attr("r", "1%").attr('cx', `${cx}%`).attr('cy', `${cy}%`)
        }
    }, []);
    return (<div className="loading-spinner-container">
                <svg ref={svgRef} className='loading-spinner-svg'></svg>
            </div>
            );

};

export default LoadingSpinner;
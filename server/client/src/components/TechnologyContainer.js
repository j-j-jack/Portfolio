import React, { useEffect, useRef } from 'react';
import "animate.css";

const TechnologyContainer = (props) => {
    const noOfBoxes= useRef(20);
    const availableBoxes = useRef([]);
    const availableTech = useRef(props.technologies);
    const randomiserRef = useRef();
    const boxOrganiserRef = useRef();
    const colors = [
        'hsl(4, 57%, 49%)', 'hsl(21, 57%, 49%)', 'hsl(38, 57%, 49%)',
        'hsl(55, 57%, 49%)', 'hsl(72, 57%, 49%)', 'hsl(89, 57%, 49%)', 
        'hsl(106, 57%, 49%)', 'hsl(123, 57%, 49%)', 'hsl(140, 57%, 49%)', 
        'hsl(157, 57%, 49%)', 'hsl(174, 57%, 49%)', 'hsl(191, 57%, 49%)', 
        'hsl(208, 57%, 49%)', 'hsl(225, 57%, 49%)', 'hsl(242, 57%, 49%)', 
        'hsl(259, 57%, 49%)', 'hsl(276, 57%, 49%)', 'hsl(293, 57%, 49%)', 
        'hsl(310, 57%, 49%)', 'hsl(337, 57%, 49%)', 'hsl(354, 57%, 49%)'
    ];
    const changeColor = () => {
        let newColor = colors[parseInt(Math.random() * 21)];
        document.documentElement.style.setProperty('--glitch-wild', newColor);
    }

    const sendToWeb = (box) => {
        let boxToClick = document.getElementById(`tco${box}`);
        console.log(boxToClick.textContent);
    }
    const randomiser = () => {
        const bl = availableBoxes.current.length;
        const boxIndex = parseInt(Math.random()*bl);
        const box = availableBoxes.current[boxIndex];
        availableBoxes.current.splice(boxIndex, 1);

        const tl = availableTech.current.length;
        const techIndex = parseInt(Math.random()*tl)
        let tech = availableTech.current[techIndex];
        availableTech.current.splice(techIndex, 1);

        let boxToChange = document.getElementById(`ttc${box}`);
        let outer = document.getElementById(`tco${box}`);
        boxToChange.innerText = '';
        boxToChange.className="tech-text-container";
        

        boxToChange.style.animation = "none";
        setTimeout(()=>{
            boxToChange.innerText = tech;
            boxToChange.className += ` animate__animated
                                    animate__fadeInOutDown
                                        animate__slow`;
        }, 1);

        setTimeout(()=>{
            boxToChange.innerText = '';
        }, 1500);

        setTimeout(()=> {
            availableBoxes.current.push(box)
            availableTech.current.push(tech);
            }, 1800);
    }

    const boxOrganiser = () => {
        for (let i = 0; i < noOfBoxes.current; i++) {
            availableBoxes.current.push(i);
        }
    }

    boxOrganiserRef.current = boxOrganiser;
    randomiserRef.current = randomiser;


    useEffect(()=> {
        boxOrganiserRef.current();
        randomiserRef.current();
        setInterval(randomiserRef.current, 100);
    },[]);


    const technologiesMap = () => {
        let rows = []
        for (let i = 0; i < noOfBoxes.current; i++) {
            rows.push(i);
        }
        return rows.map((row) => {
            let displayClass = '';
            if (row > 14) {
                displayClass = 'fifteen-plus';
            }
            return (
            <div
                onClick={() => sendToWeb(row)}
                id={`tco${row}`}
                key={`techBox${row}`} 
                className={`${displayClass} technology-container-outer`}
                onMouseEnter={()=>changeColor()}>
           <div className="technology-container-mask"></div>
                <div className="technology-container-inner">
                 <div id={`ttc${row}`} className="tech-text-container"></div>
             </div>
             </div>
        )})
        };

    return (
        <div className='about-section-technologies-container'>
            {technologiesMap()}
            </div>
    );
};

export default TechnologyContainer;
import React, { useEffect, useRef } from 'react';
import "animate.css";

const TechnologyContainer = (props) => {
    const noOfBoxes= useRef(20);
    const availableBoxes = useRef([]);
    const availableTech = useRef(props.technologies);
    const randomiserRef = useRef();
    const boxOrganiserRef = useRef();

    
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
        boxToChange.innerText = '';
        boxToChange.className="tech-text-container";
        boxToChange.className += ` animate__animated
                                    animate__fadeInOutDown
                                        animate__slow`;
        boxToChange.style.animation = "none";
        setTimeout(()=>{boxToChange.style.animation = ''; boxToChange.innerText = tech;}, 1);

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
            <div key={`techBox${row}`} className={`${displayClass} technology-container-outer`}>
           <div className="technology-container-mask"></div>
           <div className="technology-container-glass"></div>
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
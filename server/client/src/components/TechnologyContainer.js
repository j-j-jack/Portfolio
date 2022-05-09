import React, { useEffect, useRef } from 'react';
import "animate.css";

const TechnologyContainer = (props) => {

   // each of the keys in the links dictionary should match exactly the values contained
   // in the technologies array. ie 'HTML' in the technologies array to 'HTML' : 'egValue.com'
   // in the links dictionary.

    const noOfBoxes= useRef(20);
    const availableBoxes = useRef([]);
    const availableTech = useRef(props.technologies);
    const randomiserRef = useRef();
    const boxOrganiserRef = useRef();

    const sendToWeb = (box) => {
        const linkKey = document.getElementById(`ttc${box}`).textContent;
        console.log(linkKey);
        console.log(typeof(linkKey));
        if (linkKey === '' || linkKey === undefined || linkKey === null) {
            return;
        }
        window.open(props.links[linkKey], '_blank');
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
        
        let outerContainer = document.getElementById(`tco${box}`);
        let innerContainer = document.getElementById(`tci${box}`)
        let boxToChange = document.getElementById(`ttc${box}`);
        let boxClone = boxToChange.cloneNode(false);
        boxToChange.remove();
        boxClone.className="tech-text-container";
        boxClone.className += ` animate__animated
                                    animate__fadeInOutDown
                                        animate__slow`;
        innerContainer.appendChild(boxClone);
        boxClone.innerText = tech;
        outerContainer.style.cursor = 'pointer';
        setTimeout(() => {
            outerContainer.style.cursor = "wait";
            boxClone.innerText = '';
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
        setInterval(randomiserRef.current, 200);
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
            if (row > 9) {
                displayClass += ' ten-plus';
            }
            if (row > 4) {
                displayClass += ' five-plus';
            }
            return (
            <div
                onClick={() => sendToWeb(row)}
                id={`tco${row}`}
                key={`techBox${row}`} 
                className={`${displayClass} technology-container-outer`}>
           <div className="technology-container-mask"></div>
                <div id={`tci${row}`} className="technology-container-inner">
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
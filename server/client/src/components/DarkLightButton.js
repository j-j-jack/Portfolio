import React, { useEffect, useRef } from 'react';
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import "./css/dark-light-button.css";

const DarkLightButton = () => {
    const stylesheetRef = useRef();

    useEffect(() => {
        const sheets = document.styleSheets;
        for (let i = 0; i < sheets.length; i++) {
            if (sheets[i].title === 'gc') {
                stylesheetRef.current = sheets[i];
            }
        }
        console.log(stylesheetRef.current);
    }, []);

    return (
        <div className="dark-light-container-outer">
            <div className="blocking-div">
            </div>
            <div className="sun-moon-container">
            <div> 
                <img src={sun} />
            </div>
            <div>
                <img src={moon} />
            </div>
            </div>
        </div>
    );
}

export default DarkLightButton;
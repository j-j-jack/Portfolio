import React, { useEffect, useRef, useState } from 'react';
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import "./css/dark-light-button.css";

const DarkLightButton = () => {
    const stylesheetRef = useRef();
    const sunMoonContainer = useRef();
    const [lightState, setLightState] = useState('light');
    
    const changeRotation = () => {
        if (lightState === 'light') {
            setLightState('dark');
        } else {
            setLightState('light');
        }
    }


    useEffect(() => {
        const sheets = document.styleSheets;
        for (let i = 0; i < sheets.length; i++) {
            if (sheets[i].title === 'gc') {
                stylesheetRef.current = sheets[i];
            }
        }
        console.log(stylesheetRef.current);
    }, []);

    const renderHelper = () => {
        if (lightState === "light") {
            return (
                <div onClick={() => {changeRotation()}} ref={sunMoonContainer} className="sun-up-container">
            <div> 
                <img src={sun} />
            </div>
            <div>
                <img src={moon} />
            </div>
            </div>
            );
        } else if (lightState === "dark") {
            return (
                <div onClick={() => {changeRotation()}} ref={sunMoonContainer} className="sun-down-container">
            <div> 
                <img src={sun} />
            </div>
            <div>
                <img src={moon} />
            </div>
            </div>
            );
        }
    }

    return (
        <div className="dark-light-container-outer">
            <div className="blocking-div">
            </div>
            {renderHelper()}
        </div>
    );
}

export default DarkLightButton;
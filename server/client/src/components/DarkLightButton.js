import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { changeLightMode } from '../actions';
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";
import "./css/dark-light-button.css";

const DarkLightButton = (props) => {
    const containerRef = useRef();
    const sunMoonContainer = useRef();

    const changeRotation = () => {
        if (props.lightMode === 'light') {
            containerRef.current.style.cursor = "not-allowed";
            containerRef.current.style.pointerEvents = "none";
            containerRef.current.style.backgroundColor = "var(--glitch-white)";
            setTimeout(() => {
                containerRef.current.style.pointerEvents = 'auto'
                containerRef.current.style.cursor = 'pointer';
            }, 600);
            
            document.documentElement.style.setProperty('--glitch-black', 'hsl(242, 57%, 89%)');
            document.documentElement.style.setProperty('--glitch-white', 'hsl(242, 57%, 9%)');
            
            document.documentElement.style.setProperty('--glitch-light-shadow', 'hsla(240, 21%, 20%, 0.692)');
            document.documentElement.style.setProperty('--glitch-dark-shadow', 'hsla(242, 57%, 89%, 0.692)');
            
            props.changeLightMode('dark');
        } else {
            containerRef.current.style.cursor = "not-allowed";
            containerRef.current.style.pointerEvents = "none";
            containerRef.current.style.backgroundColor = "var(--glitch-aqua)";
            setTimeout(() => {
                containerRef.current.style.pointerEvents = 'auto'
                containerRef.current.style.cursor = 'pointer';
            }, 600); 

            document.documentElement.style.setProperty('--glitch-black', 'hsl(242, 57%, 9%)');
            document.documentElement.style.setProperty('--glitch-white', 'hsl(242, 57%, 89%)');

            document.documentElement.style.setProperty('--glitch-light-shadow', 'hsla(242, 57%, 89%, 0.692)');
            document.documentElement.style.setProperty('--glitch-dark-shadow', 'hsla(240, 21%, 20%, 0.692)');

            props.changeLightMode('light');
        }
    }

    const renderHelper = () => {
        if (props.lightMode === "light") {
            return (
                <div ref={sunMoonContainer} className="sun-up-container">
            <div> 
                <img src={sun} />
            </div>
            <div>
                <img src={moon} />
            </div>
            </div>
            );
        } else if (props.lightMode === "dark") {
            return (
                <div ref={sunMoonContainer} className="sun-down-container">
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
        <div ref={containerRef} onClick={() => {changeRotation()}} className="dark-light-container-outer">
            <div className="blocking-div">
                <span>Change</span>
            </div>
            {renderHelper()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { 
        lightMode: state.lightMode.lightMode
    };
}

export default connect(mapStateToProps, { changeLightMode })(DarkLightButton);
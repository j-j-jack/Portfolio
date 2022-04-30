import React, {useState, useRef} from 'react';
import "./css/link-button.css";

const LinkButton = (props) => {
    const [color, setColor] = useState("logo-color");
    const backgroundColorRef = useRef();
    const colorBehindLogoRef = useRef();
    const setBackgroundColor = () => {
        backgroundColorRef.current = getComputedStyle(
        document.documentElement).getPropertyValue(props.color);
        return backgroundColorRef.current;
    }

    const colorHelper = () => {
        let textColor = null;
        if (color==="logo-color") {
            textColor = getComputedStyle(
                document.documentElement).getPropertyValue(props.colorTwo);
                console.log(textColor);
            return textColor;
        }
        textColor = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-pink");
            return textColor;
        }

    const colorBehindLogo = () => {
        colorBehindLogoRef.current = getComputedStyle(
        document.documentElement).getPropertyValue(props.colorTwo);
        return colorBehindLogoRef.current;
    }

    return (
        <div 
            onMouseEnter={()=> {setColor("hover")}}
            onMouseLeave={()=>{setColor("logo-color")}}
            onClick={()=> {window.open(props.link, '_blank');}}
            style={{"backgroundColor": colorBehindLogo()}}
            className="link-container-outer">
            <div 
                style={{
                    "backgroundColor": setBackgroundColor(),
                    "color": colorHelper()
                }} 
                className="link-blocking-div" >
                <span>{props.linkName}</span>
            </div>
            <div className="link-image-container">
                <div> 
                    <img src={props.image} />
                </div>
            </div>
        </div>
    );
};

export default LinkButton;
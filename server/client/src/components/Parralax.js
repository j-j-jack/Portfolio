import React, { useEffect, useRef } from 'react';
import "./css/parralax.css";
// the above css file and the component below are sourced from 
// https://keithclark.co.uk/articles/pure-css-parallax-websites/

const Parralax = (props) => {
    const backgroundRef = useRef();

    useEffect(() => {
        const changeBackgroundSizeWithHeight = () => {
            // Andrii Verbytskyi on Stack Overflow
            // https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
            var pageHeight = 0;

            function findHighestNode(nodesList) {
                for (var i = nodesList.length - 1; i >= 0; i--) {
                    if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
                        var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
                        pageHeight = Math.max(elHeight, pageHeight);
                }
                if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
            }
        }
        findHighestNode(document.documentElement.childNodes);
        console.log(pageHeight);
        backgroundRef.current.style.height = `${pageHeight}px`;
    }

        changeBackgroundSizeWithHeight();

        window.addEventListener('resize', () => {
            changeBackgroundSizeWithHeight();
            console.log('resize');
        })
    }, []);

    return (
        <div className="parrallax-outer">
        <div className="parallax">
            <div ref={backgroundRef} className="parallax__layer parallax__layer--back">
            </div>
            <div className="parallax__layer parallax__layer--base">
                {props.children}
            </div>
        </div>
        </div>
    );
};

export default Parralax;
import React, { useEffect, useRef } from 'react';
import "./css/parralax.css";
// the above css file and the component below are sourced from 
// https://keithclark.co.uk/articles/pure-css-parallax-websites/

const Parralax = (props) => {
    const backgroundRef = useRef();
    const parralaxRef = useRef();

    useEffect(() => {
        setTimeout(()=> {
            parralaxRef.current.style.overflowX = 'hidden';
            parralaxRef.current.style.overflowY = 'auto';
        }, 3500);

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
        backgroundRef.current.style.height = `${pageHeight}px`;
    }

        changeBackgroundSizeWithHeight();

        window.addEventListener('resize', () => {
            changeBackgroundSizeWithHeight();
        })
    }, []);

    return (
        <div className="parallax-outer">
        <div ref={parralaxRef} className="parallax">
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
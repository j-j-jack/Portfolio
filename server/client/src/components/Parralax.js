import React from 'react';
import "./css/parralax.css";
// the above css file and the component below are sourced from 
// https://keithclark.co.uk/articles/pure-css-parallax-websites/

const Parralax = (props) => {
    return (
        <div className="parrallax-outer">
        <div className="parallax">
            <div className="parallax__layer parallax__layer--back">
                <div className="title"></div>
            </div>
            <div class="parallax__layer parallax__layer--base">
                {props.children}
            </div>
        </div>
        </div>
    );
};

export default Parralax;
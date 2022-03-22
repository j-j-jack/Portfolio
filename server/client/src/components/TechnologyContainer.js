import React from 'react';
import "animate.css";

const TechnologyContainer = (props) => {

    return (
        <div className="technology-container-outer">
            <div className="technology-container-mask"></div>
            <div className="technology-container-glass"></div>
            <div className="technology-container-inner">
                <div className={`tech-text-container ${props.containerClassOne}`}>{props.technologyOne}</div>
            </div> 
            <div className="technology-container-inner">
                <div className={`tech-text-container ${props.containerClassTwo}`}>{props.technologyTwo}</div>
            </div>    
        </div>
    );
};

export default TechnologyContainer;
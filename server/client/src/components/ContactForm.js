import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

import FormButton from './FormButton';
import { connect } from 'react-redux';
import { changeContactedStatus } from '../actions';
import "./css/contact-form.css";
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';


const ContactForm = (props) => {
    const baseURL = window.location.origin + "/api";
    const api = axios.create(
        {baseURL: baseURL}
    );
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const formContainer = useRef();

    //refs for form inputs
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const bodyRef = useRef(); 

    //refs for error message containers
    const nameErrorRef = useRef();
    const emailErrorRef = useRef();
    const subjectErrorRef = useRef();
    const bodyErrorRef = useRef();

    // refs for form labels 
    const nameLabelRef = useRef();

    // refs for form completion animations
    const failedSvgRef = useRef();
    const succeededSvgRef = useRef();

    useEffect(()=> {
        let yellow = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-yellow");
        let red = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-red");
        let green = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-green");
        let blue = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-blue");
        let pink = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-pink");
        let aqua = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-aqua");
        let white = getComputedStyle(
            document.documentElement).getPropertyValue("--glitch-white");

        let colors = [yellow, green, aqua, blue, pink, red, white];


        if(props.contacted==="failed") {
            setInterval( () => {
            let posNeg = (Math.random() > .5);
                 let duration = 500 + parseInt(Math.random() * 600);
                 let size = .3 + Math.random();
                 let sizeAir = `${size}em`;
                 let sizeGround = `${size*3}em`;
                 let x = 30 + Math.random() * 40;
                 let x1 = `${x}%`;
                 let x2 = null;
                 if (posNeg){
                 x2 = `${x+10}%`;
                 let x2T = `${x+20}%`;
                d3.select(failedSvgRef.current).append('line')
                  .attr('class', "glitch-yellow")
                    .style("stroke-width", 2)
                      .attr("x1", x1)
                        .attr("y1", "-100%")
                          .attr("x2", x2)
                            .attr("y2", "0%").transition()
                              .duration(duration).attr("x1", x2).attr("y1", "0%")
                                .attr("x2", x2T).attr("y2", "100%").style("opacity", "0").remove();
                 
                d3.select(failedSvgRef.current).append('circle')
                  .attr("cx", x2)
                    .attr("cy", "0%")
                      .attr("r", sizeAir)
                        .attr("fill", red)
                          .transition()
                            .duration(duration)
                              .attr("cx", x2T)
                                .attr("cy", "100%")
                                  .transition()
                                    .duration(500)
                                    .attr("fill", yellow)
                                    .attr("r", sizeGround)
                                      .style("opacity", "0")
                                        .remove();
                 } else {
                x2 = `${x-10}%`;
                let x2T = `${x-20}%`;
                d3.select(failedSvgRef.current).append('line')
                  .attr('class', "glitch-yellow")
                    .style("stroke-width", 2)
                      .attr("x1", x1)
                        .attr("y1", "-100%")
                          .attr("x2", x2)
                            .attr("y2", "0%").transition()
                              .duration(duration).attr("x1", x2).attr("y1", "0%")
                                .attr("x2", x2T).attr("y2", "100%").style("opacity", "0")
                                  .remove();
                 
                d3.select(failedSvgRef.current).append('circle')
                  .attr("cx", x2)
                    .attr("cy", "0%")
                      .attr("r", sizeAir)
                        .attr("fill", red)
                          .transition()
                            .duration(duration)
                              .attr("cx", x2T)
                                .attr("cy", "100%")
                                  .transition()
                                    .duration(500)
                                    .attr("fill", yellow)
                                    .attr("r", sizeGround)
                                      .style("opacity", "0")
                                        .remove();
                }
            }, 350);
        }
        else if (props.contacted === "contacted") {
            // https://observablehq.com/@onoratod/animate-a-path-in-d3
            const svg = d3.select(succeededSvgRef.current).append("svg")
                        .attr("viewBox", `0 0 1000 1000`).attr("class", "contact-succeeded-svg");
                    setInterval(() => {
                        const curve = d3.line().curve(d3.curveNatural);
                        let x = 125 + (Math.random() * 750);
                        let x2 = null;
                        let posNeg = (Math.random() > .5);
                        if (posNeg) {
                            x2 = x + Math.random() * 200;
                        }
                        else {
                            x2 = x - (Math.random() * 200);
                        }
                        let y = 2200;
                        let y2 = 100 + (Math.random() * 250);
                        const points = 
                            [
                                [x, y], 
                                
                                [x + ((x - x2)/2), y - ((y - y2)/2)],
                                
                                [x2, y2]
                            ]

                        var path = svg.append("path")
                        .attr("class", "glitch-white-stroke firework-fade")
                          .attr("d", curve(points))
                            .attr("fill", "none")
                              .attr("stroke-width", "2");


      

    const length = path.node().getTotalLength();

    path.attr("stroke-dasharray", length + " " + length)
        .attr("stroke-dashoffset", length)
          .transition()
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", -length)
          .duration(1000).remove()
    
    setTimeout(()=> {
        svg.append('circle').attr('fill', yellow)
          .attr('cx', x2).attr('cy', y2).attr('r', 2).transition().duration(250)
          .attr('fill', colors[parseInt(Math.random() * 7)])
          .attr('r', 100)
          .style('opacity', '0').remove();
    }, 500);
  
  

                    }, 350)
                }
    }, [props.contacted]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        // the if statements below are for checking form errors
        let errorMessages = {
            "name": "",
            "email": "",
            "subject": "",
            "body": ""
        }

        if (nameRef.current.value.length < 3) {
            errorMessages["name"] = "name must be at least 3 characters";
        }

        if (nameRef.current.value === null || nameRef.current.value === '') {
            errorMessages["name"] = "please fill out this field";
        }

        function ValidateEmail() 
        // https://www.w3resource.com/javascript/form/email-validation.php
        {
            //eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRef.current.value))
            {
                return (true)
            }
            return(false);
        }

        if (!ValidateEmail()) {
            errorMessages['email'] = "please enter a valid email";
        }

        if (subjectRef.current.value.length < 3) {
            errorMessages["subject"] = "subject must be at least 3 characters";
        }

        if (subjectRef.current.value === null || subjectRef.current.value === '') {
            errorMessages["subject"] = "please fill out this field";
        }


        if (bodyRef.current.value.length < 20) {
            errorMessages["body"] = "message must be at least 20 characters";
        }

        if (bodyRef.current.value === null || bodyRef.current.value === '') {
            errorMessages["body"] = "please fill out this field";
        }
        
        let exitSubmit = false;
        for (let [key, value] of Object.entries(errorMessages)) {
            if (key === "name") {
                if (value.length > 0)  {
                    nameLabelRef.current.className = "form-label error-exists";
                    exitSubmit = true;
                }
                nameErrorRef.current.innerText = value;
            }

            if (key === "email") {
                if (value.length > 0)  {
                    exitSubmit = true;
                }
                emailErrorRef.current.innerText = value;
            }

            if (key === "subject") {
                if (value.length > 0)  {
                    exitSubmit = true;
                }
                subjectErrorRef.current.innerText = value;
            }

            if (key === "body") {
                if (value.length > 0)  {
                    exitSubmit = true;
                }
                bodyErrorRef.current.innerText = value;
            }
        }
        
        if (exitSubmit) {
            return;
        }

        props.changeContactedStatus('loading');
        event.preventDefault();
        const response = await api.post('/send_email', {
            senderName: name,
            senderEmail: email,
            subject,
            body
        });
        if (response.data.messageId) {
            setTimeout(()=> { props.changeContactedStatus('contacted');}, 7000);
        } else {
            setTimeout(()=> { props.changeContactedStatus('failed');}, 7000);
        }
    }

    const renderHelper = () => {
        if (props.contacted==='not_contacted') {
            return (
            <React.Fragment>
            <div id="form-instructions" className="container-intro">Fill out the form below...</div>
            <div className="form-container-inner">
            <form  
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="form-group">
                <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                    value={name}
                    minLength="3"
                    onChange={(event)=> setName(event.target.value)}
                />
                <label ref={nameLabelRef} htmlFor="name" className="form-label">Your Name</label>
                <div className="error-container" ref={nameErrorRef}></div>
                </div>
                <div className="form-group">
                <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                />
                <label htmlFor="email" className="form-label">Your Email</label>
                <div className="error-container" ref={emailErrorRef}></div>
                </div>
                <div className="form-group">
                <input
                    ref={subjectRef}
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                    value={subject}
                    minLength="3"
                    onChange={(event)=> setSubject(event.target.value)}
                />
                <label htmlFor="subject" className="form-label">Subject</label>
                <div className="error-container" ref={subjectErrorRef}></div>
                </div>
                <div className="form-group">
                <textarea
                    ref={bodyRef}
                    id="body"
                    name="body"
                    placeholder="Your Message"
                    className="form-control"
                    value={body}
                    minLength="20"
                    onChange={(event)=> setBody(event.target.value)}
                >
                </textarea>
                <label htmlFor="body" className="text-label">Your Message</label>
                <div className="error-container" ref={bodyErrorRef}></div>
                </div>
                <div className="contact-button-container">
                    <FormButton
                        buttonClass="form-submission-button" 
                        buttonText="Submit"
                    />
                </div>
            </form>
            </div>
            </React.Fragment>
            );
        } else if (props.contacted==='loading') {
            return (
                <LoadingSpinner text="Loading..." />
            );
        } else if (props.contacted==='contacted') {
            return (
                <React.Fragment>
                    <div className="contact-form-sky"></div>
                    <div className="contact-form-ground"></div>
                    <div ref={succeededSvgRef} className="contact-succeeded-svg-container">
                    </div>
                <div className="form-completion-text-container">
                    <h3 className="form-completion-heading">It's a Celebration!</h3>
                    <p className="form-completion-p">Thank You. I will read your message and get back to you as soon as possible</p>
                </div>
                </React.Fragment>
            );
        } else if (props.contacted==='failed') {
            return (
                <React.Fragment>
                <div className="contact-form-sky"></div>
                <div className="contact-form-ground"></div>
                <div className="contact-failed-svg-container">
                    <svg ref={failedSvgRef} className="contact-failed-svg">
                    </svg>
                </div>
                <div className="form-completion-text-container">
                    <h3 className="form-completion-heading">Uh Oh... Armageddon!</h3>
                    <p className="form-completion-p">
                        Sorry that didn't work. 
                        You can try contacting me at<span> </span> 
                        <br></br>
                        <a className="email-link" 
                            href="mailto: jackosullivan541@gmail.com" 
                            rel="noopener noreferrer" 
                            target="_blank" >
                                jackosullivan541@gmail.com
                        </a>
                        </p>
                </div>
                </React.Fragment>
            );
        }
    }
    return (
        <React.Fragment>
        <div ref={formContainer} className="form-container">
            {renderHelper()}
        </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => {
    return { 
        contacted: state.contacted.contacted
    };
};

export default connect(mapStateToProps, { changeContactedStatus })(ContactForm);
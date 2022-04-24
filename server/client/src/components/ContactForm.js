import React, { useState, useRef } from 'react';
import * as d3 from 'd3';

import FormButton from './FormButton';
import { connect } from 'react-redux';
import { changeContactedStatus } from '../actions';
import "./css/contact-form.css";
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';


const ContactForm = (props) => {
    const api = axios.create(
        {baseURL: "http://localhost:3000/api"}
    )
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const formContainer = useRef();

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const bodyRef = useRef(); 

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
            console.log('enter name field');
            errorMessages["name"] = "please fill out this field";
        }

        function ValidateEmail() 
        // https://www.w3resource.com/javascript/form/email-validation.php
        {
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

           

        console.log(errorMessages);
        return;

        props.changeContactedStatus('loading');
        event.preventDefault();
        const response = await api.post('/send_email', {
            senderName: name,
            senderEmail: email,
            subject,
            body
        });
        if (response.data.messageId) {
            setTimeout(()=> { props.changeContactedStatus('contacted');}, 5000);
        } else {
            setTimeout(()=> { props.changeContactedStatus('failed');}, 5000);
        }
    }

    const renderHelper = () => {
        if (props.contacted==='not_contacted') {
            return (
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
                    onChange={(event)=> setName(event.target.value)}
                />
                <label for="name" class="form-label">Your Name</label>
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
                <label for="email" class="form-label">Your Email</label>
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
                    onChange={(event)=> setSubject(event.target.value)}
                />
                <label for="subject" class="form-label">Subject</label>
                </div>
                <div className="form-group">
                <textarea
                    ref={bodyRef}
                    id="body"
                    name="body"
                    placeholder="Your Message"
                    className="form-control"
                    value={body}
                    onChange={(event)=> setBody(event.target.value)}
                >
                </textarea>
                <label for="body" class="text-label">Your Message</label>
                </div>
                <div className="contact-button-container">
                    <FormButton
                        buttonClass="form-submission-button" 
                        buttonText="Submit"
                    />
                </div>
            </form>
            );
        } else if (props.contacted==='loading') {
            return (
                <LoadingSpinner text="Loading..." />
            );
        } else if (props.contacted==='contacted') {
            return (
                <div>
                    <h3>Thank You!</h3>
                    <p>I will read your message and get back to you as soon as possible</p>
                </div>
            );
        } else if (props.contacted==='failed') {
            return (
                <div>
                    <h3>Sorry</h3>
                    <p>That didn't work. You can try contacting me at jackosullivan541@gmail.com</p>
                </div>
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
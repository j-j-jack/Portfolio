import React, { useState } from 'react';

import FormButton from './FormButton';
import { connect } from 'react-redux';
import { changeContactedStatus } from '../actions';
import "./css/contact-form.css";
import axios from 'axios';


const ContactForm = (props) => {
    const api = axios.create(
        {baseURL: "http://localhost:3000/api"}
    )
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('')
    const handleSubmit =  async(event) => {
        props.changeContactedStatus('loading');
        event.preventDefault();
        const response = await api.post('/send_email', {
            senderName: name,
            senderEmail: email,
            subject,
            body
        });
        props.changeContactedStatus('not_contacted')
        if (response.data.messageId) {
            props.changeContactedStatus('contacted');
        } else {
            props.changeContactedStatus('not_contacted');
        }
    }

    const renderHelper = () => {
        if (props.contacted==='not_contacted') {
            return <div>Not contacted</div>;
        } else if (props.contacted==='loading') {
            return <div>Loading</div>;
        } else if (props.contacted==='contacted') {
            return <div>Contacted</div>;
        }
    }
    return (
        <div className="form-container">
            {renderHelper()}
            <form  onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name </label>
                <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                    required
                />
                <label htmlFor="email-input">Email</label>
                <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    required
                />
                <label htmlFor="subject-input">Subject</label>
                <input
                    id="subject-input"
                    type="text"
                    value={subject}
                    onChange={(event)=> setSubject(event.target.value)}
                    required
                />
                <label htmlFor="body-input">Message</label>
                <textarea 
                    id="body-input"
                    value={body}
                    onChange={(event)=> setBody(event.target.value)}
                    required
                >
                </textarea>
                <div style={{"textAlign": "center","marginTop": "2em"}}>
                    <FormButton
                        buttonClass="form-submission-button" 
                        buttonText="Submit"
                    />
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { 
        contacted: state.contacted.contacted
    };
};

export default connect(mapStateToProps, { changeContactedStatus })(ContactForm);
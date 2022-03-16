import React, { useState } from 'react';
import FormButton from './FormButton';

import "./css/contact-form.css";
import axios from 'axios';

const ContactForm = () => {
    const api = axios.create(
        {baseURL: "http://localhost:3000/api"}
    )
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('')
    const handleSubmit =  async(event) => {
        event.preventDefault();
        const res = await api.post('/send_email', {
            senderName: name,
            senderEmail: email,
            subject: subject,
            body, body
        });
        console.log('Submitted');
    }

    return (
        <div className="form-container">
            <form  onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(event)=> setName(event.target.value)}
                    required
                />
                <label>email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    required
                />
                <label>Subject: </label>
                <input
                    type="text"
                    value={subject}
                    onChange={(event)=> setSubject(event.target.value)}
                    required
                />
                <label>Message: </label>
                <textarea 
                    value={body}
                    onChange={(event)=> setBody(event.target.value)}
                    required
                >
                </textarea>
                <FormButton
                    buttonClass="form-submission-button" 
                    buttonText="Submit"
                />
            </form>
        </div>
    )
};

export default ContactForm;
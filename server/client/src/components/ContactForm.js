import React, { useState } from 'react';
import FormButton from './FormButton';

import "./css/contact-form.css";
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('')
    const onSubmit = (event) => {
        event.preventdefault();
        console.log('Submit');
    }

    return (
        <div className="form-container">
            <form>
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
                    onSubmit={onSubmit}
                    buttonClass="form-submission-button" 
                    buttonText="Submit"
                />
            </form>
        </div>
    )
};

export default ContactForm;
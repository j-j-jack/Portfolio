import React from 'react';
import FormButton from './FormButton';

import "./css/contact-form.css";

const ContactForm = () => {
    const onSubmit = () => {
        console.log('Submit');
    }

    return (
        <div className="form-container">
            <label>Name: </label>
            <input
                type="text"
                required
            />
            <label>email</label>
            <input
                type="email"
                required
            />
            <label>Subject: </label>
            <input
                type="text"
                required
            />
            <label>Message: </label>
            <textarea required></textarea>
            <FormButton
                onSubmit={onSubmit}
                buttonClass="form-submission-button" 
                buttonText="Submit"
            />
        </div>
    )
};

export default ContactForm;
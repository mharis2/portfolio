import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.text();

        setStatus(data);
        setName('');
        setEmail('');
        setMessage('');

        // Clear the status message after 3 seconds
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div id="contact">
            <h1>CONTACT</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Send Message</button>
            </form>
            <p>{status}</p>
        </div>
    );
}

export default Contact;

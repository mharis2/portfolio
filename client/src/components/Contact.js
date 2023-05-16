import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
    
            const data = await response.text();
    
            if(response.status === 200){
                setStatus({
                    message: data,
                    isError: false
                });
            } else {
                setStatus({
                    message: data,
                    isError: true
                });
            }
        } catch (error) {
            setStatus({
                message: "Error sending message",
                isError: true
            });
        }
    
        setName('');
        setEmail('');
        setMessage('');
    
        // Clear the status message after 3 seconds
        setTimeout(() => setStatus({}), 3000);
    };
    
    return (
        <div id="contact">
            <h1>CONTACT</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                
                <button type="submit">Send Message</button>
            </form>
            <p>{status.message}</p>
        </div>
    );
    
}

export default Contact;

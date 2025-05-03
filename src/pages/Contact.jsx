import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Image from '../assets/workspace_background.png';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_xy6eod5', 'template_6a5z46l', form.current, {
            publicKey: '0BNpsClwTqYq_31Cm',
        })
        // The public key is specifically designed to be exposed in frontend code
        // NOT the same as a secret API key, authorizing requests only from EmailJS templates
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.test);
            },
        );
    }
    
    return(
        <>
        <Navbar></Navbar>
        <div className="thank-you-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="paragraph-1">
            Thanks so much for being here and taking a look at my projects and experiences.
            I'm open to all inquiries, whether it's for a coffee chat, potential
            collaborations for projects/hackathons, or if you just want to say hi!
        </p>
        <img src={Image} className="contact-me-photo"></img>
        <p className="paragraph-2">
            I'm looking forward to hearing from you soon! 
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-box">
            <label>Full Name</label>
            <input type="text" name="user_name" className="field" placeholder="Enter your name" required />
        </div>
        <div className="input-box"> 
            <label>Email Address</label>
            <input type="text" name="user_email" className="field" placeholder="Enter your e-mail" required />
            {/* These inputs are under the assumption for single-line inputs, like names and email fields
            //  Thus, no resizing is necessary in this regard */}
        </div>
        <div className="input-box">
            <label>Write Your Message</label>
            <textarea name="message" className="msg-field" placeholder="Write your message here" required />
            {/* Textarea is explicitly made for multi-line content like messages and comments, permitting resizing */}
        </div>
        <button type="submit" className="send-msg">Send Message</button>
        </form>
        </div>
        <Footer></Footer>
        </>

        // Draft that pops up in Outlook is how EmailJS interacts with
        // our personal service provider
    )
}

export default Contact
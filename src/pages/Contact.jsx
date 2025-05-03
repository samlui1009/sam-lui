import React from 'react';
import './Contact.css';
import Image from '../assets/workspace_background.png';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {

    return(
        <>
        <Navbar></Navbar>
        <div className="thank-you-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="paragraph-1">
            Thanks so much for being here and taking a look at my projects and experiences.
            I'm open to all inquiries, whether it's asking about my career history, potential
            collaborations for projects, or if you just want to say hi!
        </p>
        <img src={Image} className="contact-me-photo"></img>
        <p className="paragraph-2">
            I'm looking forward to hearing from you soon! 
        </p>
        <form className="contact-form">
        <div className="input-box">
            <label>Full Name</label>
            <input type="text" className="field" placeholder="Enter your name" required />
        </div>
        <div className="input-box"> 
            <label>Email Address</label>
            <input type="text" className="field" placeholder="Enter your e-mail" required />
            {/* These inputs are under the assumption for single-line inputs, like names and email fields
            //  Thus, no resizing is necessary in this regard */}
        </div>
        <div className="input-box">
            <label>Write Your Message</label>
            <textarea className="msg-field" placeholder="Write your message here" required />
            {/* Textarea is explicitly made for multi-line content like messages and comments, permitting resizing */}
        </div>
        <button type="submit" className="send-msg">Send Message</button>
        </form>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Contact
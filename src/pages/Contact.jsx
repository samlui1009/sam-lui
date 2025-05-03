import './Contact.css';
import Image from '../assets/cozy-workspace.png';
import Navbar from '../components/Navbar.jsx';

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
            Feel free to fill out the form below. I'm looking forward to hearing from you. 
        </p>
        </div>
        </>
    )

}

export default Contact
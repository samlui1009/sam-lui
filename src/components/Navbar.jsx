import { FaLaptopCode, FaRegFilePdf, FaUser, FaGithub, FaHome, FaEnvelope } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="bar-container">
        <nav className="navbar">
            <ul className="nav-options">
                <li><a href="index.html"><FaHome/>Home</a></li>
                <li><a href=""><FaUser/>About Me</a></li>
                <li><a href=""><FaRegFilePdf/>Resume</a></li>
                <li><a href=""><FaGithub/>GitHub</a></li>
                <li><a href=""><FaLaptopCode/>Projects</a></li>
                <li><a href=""><FaEnvelope/>Contact Me</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar
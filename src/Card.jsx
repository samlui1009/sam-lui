import Image from './assets/profile-picture.jpg'

function Card() {
    return(
        <div className="card">
            <h2 className = "intro-header">Hi! My name is Sam Lui.</h2>
            <img src={Image} alt="Sam's Profile Picture"></img>
            <h3>It's very nice to meet you.</h3>
            <p>I am a current Bachelor of Computer Science (BCS) student, 
                affiliated with the University of British Columbia.
            </p>
            <p>I'm an aspiring SWE.
            </p>
        </div>
    );
}

export default Card
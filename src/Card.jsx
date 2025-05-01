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
            <p>I have deeply rooted passions in applying technological advancements 
                to improve overall care quality, and health outcomes. My goal is to
                use my new skillsets attained from my second degree to give back and make
                fruitful contributions to society and beyond.
            </p>
        </div>
    );
}

export default Card
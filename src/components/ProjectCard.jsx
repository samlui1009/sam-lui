import './ProjectCard.css';

function ProjectCard({ title, image, type, description, url }) {

    return(
        <>
        <div className='project-container'>
            <h3>{ title }</h3>
            <img src={ image } className="project-image"></img>
            <h4>{ type }</h4>
            <p>{description}</p>
            {/* <p>Tech Stack Used: </p> */}
            {/* TODO:  Add the tech stack! */}
            <button className = "code-button"><a href = { url } target="_blank">Github Repo</a></button>
        </div>
        </>
    )
}
// Pass in data so that the Project Card component becomes
// reusable! Cool beans. Did not know this existed.

export default ProjectCard;
import './Projects.css';
import ProjectGrid from '../components/ProjectGrid.jsx';

function Projects() {

    return(
        <>
        <div>
            <div className="text-container">
            <h1 className="title">Recent Projects</h1>
            <p>From ideating to building, these projects showcase my current technical skillset.</p>
            <p>My goals for creating is to practice tech stacks, while delivering a user-friendly experience with a functional, aesthetically-pleasing Minimum Viable Product.</p>
            </div>
            <div className="project-grid">
                <ProjectGrid></ProjectGrid>
            </div>
        </div>
        </>
    )
}

export default Projects
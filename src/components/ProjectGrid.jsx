import './ProjectGrid.css';
import ProjectCard from '../components/ProjectCard.jsx';
import PantryPal from '../assets/pantrypal.jpg';
import PLAI from '../assets/plai-logo.png';
import Enduro from '../assets/enduro.jpg';
import DailySips from '../assets/dailysips-logo.png'
import Portfolio from '../assets/portfolio-logo.png';

import { SiMongodb, SiJupyter, SiJunit5, SiVite, SiCss3, SiJson, SiFigma } from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';


function ProjectGrid() {
    return (
        <>
        <div className="grid-container">
            <ProjectCard
            title = "DailySips"
            type = "Academic"
            image = { DailySips }
            description = "A Java-based CLI and user-friendly GUI, aimed to help
            users monitor and track their patterns in daily consumption of beverages, helping them stay below their set calorie, caffeine and sugar intake."
            url = "https://github.com/samlui1009/DailySips">
            </ProjectCard>

            <ProjectCard
            title = "PantryPal"
            type = "BCS Hacks 2025 Project"
            image = { PantryPal }
            description = "Don't fret over having to creatively think up new recipes ever again! Use PantryPal to save time, money, reduce food wastage and promote healthy cooking with easy-to-follow AI-generated recipes!"
            url = "https://github.com/ajarodpaulson/pantry_pal">
            </ProjectCard>

            <ProjectCard
            title = "Sam's Portfolio Page"
            type = "Personal"
            image = { Portfolio }
            description = "With a combination of StackOverflow scouring, w3schools, YouTube tutorials and 
            generative AI, I created a simple yet dynamic portfolio page to showcase my previous experiences and recent coding projects."
            url = "https://github.com/samlui1009/portfolio_page">
            </ProjectCard>

            <ProjectCard
            title = "Enduro"
            type = "cmd-f 2025 Project"
            image = { Enduro }
            description = "Having trouble keeping up and staying motivated with your fitness goals? Here's Enduro! Enduro helps users build up fitness habits incrementally, transforming 
            them into a long-term lifestyle choice through different physical activities of their choice!"
            url = "https://github.com/wendytso/exercise-tracker">
            </ProjectCard>

            <ProjectCard
            title = "Predicting Player Recruitment with the Pacific Laboratory of Artificial Intelligence"
            type = "Academic"
            image = { PLAI }
            description = "My first foray into data science! In this project, my groupmates and I executed an exploratory analysis of player-oriented data to build a predictive 
            KNN-regression model, determining if certain traits could contribute higher-quality data."
            url = "https://github.com/Sen550/dsci100-project">
            </ProjectCard>

        </div>
        </>
    );
}

export default ProjectGrid
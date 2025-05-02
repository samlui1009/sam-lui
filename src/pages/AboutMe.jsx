import './AboutMe.css';

function AboutMe() {
    return (
        <div>
            <div className="career-transition"> 
                <h2>What did I do before making my second career transition?</h2>
                <p>I started my first undergraduate degree in 2011, graduating in December 2017 with a 
                Bachelors of Health Sciences (Life Sciences Concentration) from Simon Fraser University.
                After working in industry for a few years as a research assistant, I attended the British Columbia Institute of Technology,
                earning an advanced diploma in Clinical Genetics Technology.
                Then, after 3 years working in public healthcare, I decided that it was time to make the switch - as such, here I am!  
                </p>
            </div>
            <div className="why-tech">
                <h2>Why tech, of all things?</h2>
                <p>Great question! Putting aside my deep fascination with technology and its limitless potential to build 
                whatever ones' heart desires, working as a healthcare
                professional made me realize the critical pain points often associated with care delivery. 
                Inefficiencies within the Canadian healthcare system significantly impacts how quickly patients 
                can get access to physicians. Working in a genetics laboratory was no exception to this - 
                thus, igniting my motivation to make my transition into tech to improve quality of care and patient accessibility.    
                </p>
                <p>In addition to that, genetics and technology actually share a very complex relationship. The world of 
                clinical genetics is rapidly evolving with the emergence of microarrays, next-generation sequencing and 
                automated image recognition for chromosome analysis. I hope to be at the forefront in developing tools to 
                help expedite the diagnostic process.
                {/* Include this as a link for what LLM's can do:  https://www.cellimagelibrary.org/pages/auto_chromosome_detector */}
                </p>
            </div>
            <div className="hobbies">
                <h2>What are some things that you like to do in your spare time?</h2>
                <p>When I'm not studying or geeking out over genetics, I love crocheting amigurumi, playing cozy Steam games and
                baking Asian-infused desserts. See below for some of my most favourite creations!
                </p>
            </div>
            <div className="interesting-facts">
                <h2>Interesting Tidbits About Me</h2>
                <ul>
                    <li>I've done an overnight hike up Mount Fuji before (16 hours!)</li>
                    <li>I ran my first half-marathon in 2024, and I'm hoping to do one again soon!</li>
                    <li>I've moved multiple times (Cross-country AND overseas) for co-op and practicum placements, including: 
                    Japan, Saskatchewan and Ontario.
                    </li>
                    <li>I'm a bubble tea fiend and built a daily beverage tracker to monitor my consumption (albeit, unsuccessfully so).</li>
                </ul>
            </div>
        </div>
    )
}
    
export default AboutMe
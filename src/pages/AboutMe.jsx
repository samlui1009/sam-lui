import './AboutMe.css';
import { IoSchool, IoCalendarNumber } from 'react-icons/io5';
import { FaComputer, FaLocationDot } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { RiCommunityFill } from "react-icons/ri";
import { IoIosHappy } from "react-icons/io";

function AboutMe() {
    return (
        <>
        <div>  
            <div className="education">
                <h2 className="title">Education<IoSchool className="logo"></IoSchool></h2>
                <hr className = "divider"></hr>
                <h3 className="school">University of British Columbia</h3>
                <p className="program">Bachelor of Computer Science (BCS) - Second Degree</p>
                <h3 className="school">British Columbia Institute of Technology</h3>
                <p className="program">Advanced Diploma in Clinical Genetics Technology</p>
                <p>Graduated with Distinction (88%)</p>
                <h3 className="school">Simon Fraser University</h3>
                <p className="program">Bachelor of Health Sciences - Life Sciences Concentration</p>
                <p>Dean's Honor Roll - Fall 2015</p>
                <p>SFU-UBC Co-op Japan Participant</p>
            </div>

            <div className="technical-skills">
                <h2 className="title">Technical Skills<FaComputer className="logo"></FaComputer></h2>
                <h3 className="type">Programming Languages</h3>
                <p className="list">HTML, CSS, Java, Python, SQL (PostgreSQL), R</p>
                <h3 className="type">Frameworks and Libraries</h3>
                <p className="list">React.js, JUnit Jupiter</p>
                <h3 className="type">Developer Tools</h3>
                <p className="list">Git, GitHub, Vite, Node.js (build environment), Visual Studio Code, Jupyter, Filmora</p>
            </div>

            <div className="professional-exp"> 
                <h2 className="title">Professional Experience<SiReaddotcv></SiReaddotcv></h2>
                <div>
                    <h3 className="org">Provincial Health Services Authority - Clinical Genetics Technologist</h3>
                    <div className="job-info">
                    <p><FaLocationDot className="logo"></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber className="logo"></IoCalendarNumber>November 2021 - August 2024</p>
                    </div>
                    <ul className="tasks">
                        <li>Applied advanced cytogenetics wet lab skills for high-volume culturing of peripheral blood and bone marrow aspirates</li>
                        <li>Performed molecular techniques such as automated DNA extraction for over 100 specimens weekly, PCR, and capillary electrophoresis (ABI 3500), ensuring swift and accurate analysis with GeneMapper</li>
                        <li>Demonstrated excellent Cytovision proficiency, accurately identifying and reporting abnormal patient findings with the correct ISCN nomenclature within established CAP turnaround times</li>
                        <li>Provided thorough training to junior technologists and practicum students, ensuring full mastery of skills through constructive feedback</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Children's Hospital of Eastern Ontario - Cytogenetics Practicum Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Ottawa, Ontario</p>
                    <p><IoCalendarNumber></IoCalendarNumber>March 2021 - July 2021</p>
                    </div>
                    <ul className="tasks">
                        <li>Learned and applied cytogenetic theory and methods by shadowing clinical instructors for patient specimens requiring genetic testing (bone marrow aspirate, peripheral blood, prenatal specimens, solid tumours)</li>
                        <li>Performed and analyzed molecular-based techniques (QF-PCR/RAD, microarray) for practice cases with accuracy</li>
                        <li>Executed CytoVision to identify and report abnormal cytogenetic findings</li>
                        <li>Abided to health and safety standards, maintaining Standard Precautions at all times</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Medipure Pharmaceuticals - Research & Administrative Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Burnaby, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2018 - February 2020</p>
                    </div>
                    <ul className="tasks">
                        <li>Performed cell-based assays to evaluate the efficacy of novel drugs for anxiety, pain, and psoriasis within the Cell Biology team</li>
                        <li>Trained a summer research intern on essential cell culture techniques, data analysis, literature searching, and lab report writing skills</li>
                        <li>Served as the Employee Health and Safety Representative, including responsibilities such as documenting health and safety meeting notes, presenting suggestions and feedback to management for workplace safety, and revising SOP drafts to meet WorkSafeBC compliance</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Kao Corporation - Research Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Tochigi Prefecture, Japan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>August 2016 - April 2017</p>
                    </div>
                    <ul className="tasks">
                        <li>Planned and executed cell culture experiments (Western Blotting, qPCR, RT-PCR) with primary human keratinocytes and melanocytes, successfully identifying novel genes and proteins involved in autophagy regulation for skin care research advancement</li>
                        <li>Collaborated harmoniously in a cross-cultural team, enhancing Japanese language skills to adapt to the work environment</li>
                        <li>Presented a comprehensive research project presentation to Kao’s Biological Sciences Laboratory, ensuring clear communication to an audience of over 60 members</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Agriculture & Agri-Food Canada - Plant Science Research Co-op Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Saskatoon, Saskatchewan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>October 2014 - April 2015</p>
                    </div>
                    <ul className="tasks">
                        <li>Managed a large collection of rapeseed oil plants, and optimized their health, growth conditions and quality through regular care and mildew prevention measures </li>
                        <li>Conducted numerous cross-breeding experiments among different donor and recipient plants to produce seeds with the desired characteristics
                        </li>
                        <li>Performed quantitative data entry for flowering plants daily</li>
                    </ul>
                </div>
            </div>

            <div className="volunteering">
                <h2 className="title">Volunteering Experience<RiCommunityFill></RiCommunityFill></h2>
                <div>
                    <h3 className="org">The C.O.D.E. Initiative</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Remote</p>
                    <p><IoCalendarNumber></IoCalendarNumber>September 2024 - April 2025</p>
                    </div>
                    <ul className="tasks">
                        <li>Instructed youth in various S.T.E.A.M.-related topics (Web development, Python) in a virtual, one-on-one setting, helping them understand curriculum material while promoting the development of critical thinking and problem-solving skills</li>
                        <li>Provided clear, concise follow-up notes to parents and guardians to notify progress</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Children's Health Policy Centre</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2015 - August 2016</p>
                    </div>
                    <ul className="tasks">
                        <li>Aided Dr. Andrea Gonzalez in the BC Healthy Connections Project, a randomized controlled trial of the Nurse-Family Partnership program, with accurate quantitative Excel data entry for over 500 study participants, biological specimen sampling kit preparation and video-editing</li>
                        <li>Supervised new trainees and interns with concise instruction and conducive feedback</li>
                    </ul>
                </div>
            </div>

            <div className="hobbies">
                <div className="hobbies-intro-section">
                <h2 className="title">Personal Interests<IoIosHappy></IoIosHappy></h2>
                <p className="paragraph">Outside of building projects, coding and studying, you can often find me spending time in my wide array of hobbies.</p>
                </div>
                <h3>Crochet</h3>
                <h3>Travel</h3>
                <h3>Long-Distance Running</h3>
                <h3>Creative Writing</h3>
            </div>

        </div>
        </>
    )
}
    
export default AboutMe;
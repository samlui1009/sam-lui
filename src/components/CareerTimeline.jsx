
import React, { useState } from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import './CareerTimeline.css';
import { Popover, Typography, Paper} from "@mui/material";

import SFULogo from '../assets/sfu-logo.png';
import AgriLogo from '../assets/agri-logo.jpg';
import KaoLogo from '../assets/kao-corporation.jpg';
import LabPic from '../assets/lab-cartoon-logo.jpg';
import BCITLogo from '../assets/BCIT_logo.svg.png';
import BCChildrens from '../assets/bc-childrens-logo.jpg';
import UBCLogo from '../assets/ubc-logo.png';

function CareerTimeline() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [popoverPosition, setPopoverPosition] = useState("right"); // Default position for popover
    const [currentItem, setCurrentItem] = useState(null); // Track the clicked item

    const handleClick = (event, position, item) => {
        setAnchorEl(event.currentTarget);
        setPopoverPosition(position);
        setCurrentItem(item);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setCurrentItem(null);
    };

  const open = Boolean(anchorEl);

    return(
        <div className="timeline-divider">
            <Timeline position="alternate" className="career-timeline">
                <TimelineItem>
                    <TimelineSeparator>
                        <img src={SFULogo} alt="Simon Fraser University's logo" className="timeline-logo"
                        onClick={(e) => handleClick(e, "right", "SFU")}
                        // E is convention for event objects in JavaScript
                        // onClick is an event handler, e is the object that gets passed by React
                        // WHEN an event occurs 
                        // e, "right" is the callback 
                        style={{ cursor: "pointer", borderRadius: "50%"}}>
                        </img>
                        <TimelineContent>Sept. 2011</TimelineContent>
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "center", horizontal: "right" }}
                    transformOrigin={{ vertical: "center", horizontal: "left"}}  
                > 
                <Typography sx={{ p: 2, maxWidth: 300}}>
                        I started my first undergraduate degree at Simon Fraser University, majoring in 
                        Health Sciences with a concentration in the life sciences, including epidemiology,
                        infectious diseases and public health.
                </Typography> 
                </Popover>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={AgriLogo} alt="Agriculture & Agri-Food Canada's logo" className="timeline-logo"
                    onClick={(e) => handleClick(e, "left", "Agri")}
                    style={{ cursor: "pointer", borderRadius: "50%"}}>
                    </img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Oct. 2014 - Apr. 2015</TimelineContent>
                </TimelineItem>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "center", horizontal: popoverPosition }}
                    transformOrigin={{ vertical: "center", horizontal: popoverPosition === "left" ? "right" : "left" }}  
                > 
                <Typography sx={{ p: 2, maxWidth: 300}}>
                        I landed my first 8-month co-op! I moved to Saskatoon, Saskatchewan, working with rapeseed and canola plants at
                        Agriculture & Agri-Food Canada.
                </Typography> 
                </Popover>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={KaoLogo} alt="Kao Corporation's logo" className="timeline-logo"></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Aug. 2016 - Apr. 2017:  Research Assistant Internship with the Kao Corporation (Tochigi, Japan)</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Dec. 2017: Completed my first undergrad!</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={LabPic} alt="Cartoon of Girl Working in a Lab" className="timeline-logo"></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>May 2018 - Jan. 2020: Research Assistant at a Pharmaceutical Start-up</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={BCITLogo} alt="BCIT's Logo" className="timeline-logo-offset"></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Aug. 2020: Begin the Clinical Genetics Technology program</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Mar. 2021 - Jul. 2021: Moved to Ottawa for a practicum placement with CHEO</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Oct. 2021: Completed my advanced diploma program with distinction!</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={BCChildrens} alt="BCCH Logo" className="timeline-logo"></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Nov. 2021 - Aug. 2024: Clinical Genetics Technologist with B.C. Children's Hospital</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                    <img src={UBCLogo} alt="UBC Logo" className="timeline-logo"></img>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Sept. 2024 - Present: Bachelor of Computer Science Student with UBC</TimelineContent>
                </TimelineItem>

             </Timeline>
        </div>
    );
}

export default CareerTimeline;


import { motion } from "framer-motion";
import { IoSchoolSharp, IoBriefcaseSharp } from "react-icons/io5"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import useMediaQuery from "../hooks/useMediaQuery";
import "react-vertical-timeline-component/style.min.css";
import verticalTimelineStyles from "../styles/verticalTimelineStyles";
import BcitLogo from "../images/bcit.jpeg";
import LypfLogo from "../images/lypf.jpg";
import DevRelAgencyLogo from "../images/devrel-agency.jpeg";
import "../styles/css/edu-and-exp.css";

const EduAndExp = () => {
    return (
        <div id="Edu&Exp" className="section edu-and-exp">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                Education / Experience
            </motion.h2>
            <div className="edu-and-exp__timeline">
                <VerticalTimeline
                    className="edu-and-exp__vertical-timeline"
                    animate={true}
                >
                    <VerticalTimelineElement
                        contentStyle={verticalTimelineStyles.verticalTimelineElement.contentStyle}
                        contentArrowStyle={verticalTimelineStyles.verticalTimelineElement.contentArrowStyle}
                        iconStyle={verticalTimelineStyles.verticalTimelineElement.iconStyle}
                        icon={<IoBriefcaseSharp />}
                        position="left"
                    >
                        <div className="edu-and-exp__summary">
                            <img src={LypfLogo} alt="lypf-logo" />
                            <div className="edu-and-exp__head">
                                <div className="edu-and-exp__work">
                                    <h4 className="edu-and-exp__position">Software Developer</h4>
                                    <h4>@ Love Your Planet Foundation</h4>
                                </div>
                                <h4 className="edu-and-exp__location">Chilliwack, BC, Canada (Remote)</h4>
                            </div>
                        </div>
                        <div className="edu-and-exp__detail">
                            <p>● BCIT Industry Sponsored Student Project (ISSP) Program</p>
                            <p>● Developed Love Your Planet Mobile App which is an easy-to-use social media for sustainability</p>
                            <p>● Redesigned the entire UI based on the client requirements</p>
                            <p>● Implemented bill tracker features that allows users to search for environmental bills and track their progress</p>
                            <p>● Debugged the existing bugs in the register and login processes</p>
                        </div>
                        <div className="edu-and-exp__date">April 2023 - May 2023</div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={verticalTimelineStyles.verticalTimelineElement.contentStyle}
                        contentArrowStyle={verticalTimelineStyles.verticalTimelineElement.contentArrowStyle}
                        iconStyle={verticalTimelineStyles.verticalTimelineElement.iconStyle}
                        icon={<IoBriefcaseSharp />}
                        position="left"
                    >
                        <div className="edu-and-exp__summary">
                            <img src={DevRelAgencyLogo} alt="devrel-agency-logo" />
                            <div className="edu-and-exp__head">
                                <div className="edu-and-exp__work">
                                    <h4 className="edu-and-exp__position">Software Developer</h4>
                                    <h4>@ DevRel.Agency</h4>
                                </div>
                                <h4 className="edu-and-exp__location">London, UK (Remote)</h4>
                            </div>
                        </div>
                        <div className="edu-and-exp__detail">
                            <p>● BCIT Industry Sponsored Student Project (ISSP) Program</p>
                            <p>● Developed Developer Journey Map which is a visualization that identifies the path a developer follows and experiences</p>
                            <p>● Developed a REST API server using MongoDB and Node.js</p>
                            <p>● Designed the user interfaces and implemented the frontend using React.js</p>
                            <p>● Deployed the application to Google Cloud</p>
                        </div>
                        <div className="edu-and-exp__date">January 2023 - April 2023</div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={verticalTimelineStyles.verticalTimelineElement.contentStyle}
                        contentArrowStyle={verticalTimelineStyles.verticalTimelineElement.contentArrowStyle}
                        iconStyle={verticalTimelineStyles.verticalTimelineElement.iconStyle}
                        icon={<IoSchoolSharp />}
                        position="right"
                    >
                        <div className="edu-and-exp__summary">
                            <img src={BcitLogo} alt="bcit-logo" />
                            <div className="edu-and-exp__head">
                                <div className="edu-and-exp__work">
                                    <h4 className="edu-and-exp__position">Diploma, Computer Systems Technology</h4>
                                    <h4>@ British Columbia Institute of Technology</h4>
                                </div>
                                <h4 className="edu-and-exp__location">Burnaby, BC, Canada</h4>
                            </div>
                        </div>
                        <div className="edu-and-exp__detail">
                            <p>● Information Systems option</p>
                            <p>● Graduated with distinction</p>
                        </div>
                        <div className="edu-and-exp__date">September 2021 - May 2023</div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default EduAndExp;
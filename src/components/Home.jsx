import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineLink } from "react-icons/ai";
import useMediaQuery from "../hooks/useMediaQuery";
import ProfileImage from "../images/profile.jpg";
import "../styles/css/home.css";

const Home = () => {
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

    return (
        <section id="Home" className="section home">
            <div className="home__contents">
                <div className="home__profile">
                    {/* introduction section */}
                    <div className="home__intro">
                        <motion.div
                            className="home__intro-summary"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            Hello, I'm <span className="home__intro-name">Chan Koh</span>
                            <br />
                            a <span className="home__intro-job">Software Developer</span>
                        </motion.div>
                        {isAboveSmallScreen && (
                            <motion.div
                                className="home__intro-detail"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.5 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                I am a recent graduate of the Computer Systems Technology program at BCIT. Equipped with a strong technical foundation in computer science and hands-on experience in full-stack web development, I am enthusiastic about launching my career in the tech industry.
                            </motion.div>
                        )}
                    </div>

                    {/* profile image for mobile screen */}
                    {!isAboveSmallScreen && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <img className="home__img" src={ProfileImage} alt="profile" />
                        </motion.div>
                    )}

                    {/* social links */}
                    <motion.div
                        className="home__socials"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="home__social-item">
                            <AiFillLinkedin />
                            <a href="https://www.linkedin.com/in/kohdc1723" target="_blank" rel="noreferrer">
                                linkedin.com/in/kohdc1723 <AiOutlineLink />
                            </a>
                        </div>
                        <div className="home__social-item">
                            <AiFillGithub />
                            <a href="https://github.com/kohdc1723" target="_blank" rel="noreferrer">
                                github.com/kohdc1723 <AiOutlineLink />
                            </a>
                        </div>
                        <div className="home__social-item">
                            <AiFillMail />
                            <p>kohdc1723@gmail.com</p>
                        </div>
                    </motion.div>
                </div>

                {/* profile image for desktop screen */}
                {isAboveSmallScreen && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <img className="home__img" src={ProfileImage} alt="profile" />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Home;
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineLink } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
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
                        <p className="home__intro-summary">
                            Hello, I'm <span className="home__intro-name">Chan Koh</span>
                            <br />
                            a <span className="home__intro-job">Software Developer</span>
                        </p>
                        {isAboveSmallScreen && (
                            <p className="home__intro-detail">I am a recent graduate of the Computer Systems Technology program at BCIT. Equipped with a strong technical foundation in computer science and hands-on experience in full-stack web development, I am enthusiastic about launching my career in the tech industry.</p>
                        )}
                    </div>

                    {/* profile image for mobile screen */}
                    {!isAboveSmallScreen && (
                        <img className="home__img" src={ProfileImage} alt="profile" />
                    )}

                    {/* social links */}
                    <div className="home__socials">
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
                    </div>
                </div>

                {/* profile image for desktop screen */}
                {isAboveSmallScreen && (
                    <img className="home__img" src={ProfileImage} alt="profile" />
                )}
            </div>
        </section>
    );
};

export default Home;
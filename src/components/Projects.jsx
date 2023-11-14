import { motion } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai";
import { SiNotion, SiGithub } from "react-icons/si";
import projects from "../constants/projects";
import "../styles/css/projects.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const ProjectCard = ({ project }) => {
    const { title, description, period, stack, projectLink, githubLinks, notionLink, image } = project;

    return (
        <motion.div
            className="project-card"
            variants={projectVariants}
        >
            <img src={image} alt={title} className="project-card__image" />
            <div className="project-card__overlay">
                <h4>{title}</h4>
                <p>{period}</p>
                <p>{description}</p>
                <p className="project-card__stack">
                    {stack.map(st => (
                        <span>{st}</span>
                    ))}
                </p>
                <div className="project-card__links">
                    {projectLink && (
                        <a href={projectLink} target="_blank" rel="noreferrer">
                            <AiOutlineLink /> {projectLink}
                        </a>
                    )}
                    {notionLink && (
                        <a href={notionLink?.url} target="_blank" rel="noreferrer">
                            <SiNotion /> {notionLink?.title}
                        </a>
                    )}
                    {(githubLinks.length !== 0) && (
                        githubLinks.map(link => (
                            <a href={link?.url} target="_blank" rel="noreferrer">
                                <SiGithub /> {link?.title}
                            </a>
                        ))
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="Projects" className="section projects">
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
                Projects
            </motion.h2>
            <div className="projects__contents">
                <motion.div
                    className="projects__container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={containerVariants}
                >
                    {projects.map(project => (
                        <ProjectCard project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
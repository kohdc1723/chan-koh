import { motion } from "framer-motion";
import skills from "../constants/skills";
import "../styles/css/skills.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.02 }
    }
};

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Skills = () => {
    return (
        <section id="Skills" className="section skills">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                Skills
            </motion.h2>
            <div className="skills__container">
                <motion.div
                    className="skills__labels"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.5 }}
                    variants={containerVariants}
                >
                    {skills?.map(skill => (
                        <motion.span
                            className="skills__label"
                            variants={skillVariants}
                        >
                            {skill?.icon}
                            <p className="skills__label-title">{skill?.title}</p>
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
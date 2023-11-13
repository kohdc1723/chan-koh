import { motion } from "framer-motion";
import skills from "../constants/skills";
import "../styles/css/skills.css";

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
                <div className="skills__labels">
                    {skills?.map((skill, index) => (
                        <motion.span
                            className="skills__label"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.5 }}
                            transition={{ delay: 0.01 * index, duration: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            {skill?.icon}
                            <p className="skills__label-title">{skill?.title}</p>
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiJquery, SiNodedotjs, SiReact, SiExpress, SiNextdotjs, SiTypescript, SiRedux, SiRecoil, SiCsharp, SiCplusplus, SiDotnet, SiC, SiPython, SiFirebase, SiGit, SiMongodb, SiMysql, SiMicrosoftsqlserver, SiAmazonaws, SiGithubactions } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../styles/css/skills.css";

const Skills = () => {
    return (
        <section id="Skills" className="section skills">
            <h2>Skills</h2>
            <div className="skills__container">
                <div className="skills__labels">
                    <span className="skills__label">
                        <SiHtml5 />
                        <p className="skills__label-title">HTML5</p>
                    </span>
                    <span className="skills__label">
                        <SiCss3 />
                        <p className="skills__label-title">CSS3</p>
                    </span>
                    <span className="skills__label">
                        <SiTailwindcss />
                        <p className="skills__label-title">Tailwind CSS</p>
                    </span>
                    <span className="skills__label">
                        <SiBootstrap />
                        <p className="skills__label-title">Bootstrap</p>
                    </span>

                    <span className="skills__label">
                        <SiJavascript />
                        <p className="skills__label-title">JavaScript</p>
                    </span>
                    <span className="skills__label">
                        <SiTypescript />
                        <p className="skills__label-title">TypeScript</p>
                    </span>
                    <span className="skills__label">
                        <SiJquery />
                        <p className="skills__label-title">JQuery</p>
                    </span>
                    <span className="skills__label">
                        <SiReact />
                        <p className="skills__label-title">React</p>
                    </span>
                    <span className="skills__label">
                        <SiNextdotjs />
                        <p className="skills__label-title">Next.js</p>
                    </span>
                    <span className="skills__label">
                        <SiNodedotjs />
                        <p className="skills__label-title">Node.js</p>
                    </span>
                    <span className="skills__label">
                        <SiExpress />
                        <p className="skills__label-title">Express</p>
                    </span>
                    <span className="skills__label">
                        <SiRedux />
                        <p className="skills__label-title">Redux</p>
                    </span>
                    <span className="skills__label">
                        <SiRecoil />
                        <p className="skills__label-title">Recoil</p>
                    </span>

                    <span className="skills__label">
                        <FaJava />
                        <p className="skills__label-title">Java</p>
                    </span>
                    <span className="skills__label">
                        <SiPython />
                        <p className="skills__label-title">Python</p>
                    </span>
                    <span className="skills__label">
                        <SiC />
                        <p className="skills__label-title">C</p>
                    </span>
                    <span className="skills__label">
                        <SiCplusplus />
                        <p className="skills__label-title">C++</p>
                    </span>
                    <span className="skills__label">
                        <SiCsharp />
                        <p className="skills__label-title">C#</p>
                    </span>
                    <span className="skills__label">
                        <SiDotnet />
                        <p className="skills__label-title">ASP.NET Core</p>
                    </span>

                    <span className="skills__label">
                        <SiMongodb />
                        <p className="skills__label-title">MongoDB</p>
                    </span>
                    <span className="skills__label">
                        <SiMysql />
                        <p className="skills__label-title">MySQL</p>
                    </span>
                    <span className="skills__label">
                        <SiMicrosoftsqlserver />
                        <p className="skills__label-title">Microsoft SQL Server</p>
                    </span>

                    <span className="skills__label">
                        <SiFirebase />
                        <p className="skills__label-title">Firebase</p>
                    </span>
                    <span className="skills__label">
                        <SiAmazonaws />
                        <p className="skills__label-title">AWS</p>
                    </span>
                    <span className="skills__label">
                        <SiGit />
                        <p className="skills__label-title">Git</p>
                    </span>
                    <span className="skills__label">
                        <SiGithubactions />
                        <p className="skills__label-title">Github Actions</p>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
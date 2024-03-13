enum Section {
    About = "ABOUT",
    Experience = "EXPERIENCE",
    Education = "EDUCATION",
    Projects = "PROJECTS",
    Skills = "SKILLS"
};

type SectionType = {
    title: string;
    id: string;
    value: Section;
};

const sections: SectionType[] = [
    {
        title: "About",
        id: "about",
        value: Section.About
    },
    {
        title: "Experience",
        id: "experience",
        value: Section.Experience
    },
    {
        title: "Education",
        id: "education",
        value: Section.Education
    },
    {
        title: "Projects",
        id: "projects",
        value: Section.Projects
    },
    {
        title: "Skills",
        id: "skills",
        value: Section.Skills
    }
];

export default sections;
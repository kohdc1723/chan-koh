type SectionType = {
    title: string;
    id: string;
    value: "About" | "Experience" | "Education" | "Projects" | "Skills";
};

const sections: SectionType[] = [
    {
        title: "About",
        id: "about",
        value: "About"
    },
    {
        title: "Experience",
        id: "experience",
        value: "Experience"
    },
    {
        title: "Education",
        id: "education",
        value: "Education"
    },
    {
        title: "Projects",
        id: "projects",
        value: "Projects"
    },
    {
        title: "Skills",
        id: "skills",
        value: "Skills"
    }
];

export default sections;
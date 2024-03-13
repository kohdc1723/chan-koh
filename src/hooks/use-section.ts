import { create } from "zustand";

enum Section {
    About = "About",
    Experience = "Experience",
    Education = "Education",
    Projects = "Projects",
    Skills = "Skills"
};

interface SectionStore {
    section: Section;
    setSection: (section: Section) => void;
};

const useSection = create<SectionStore>(set => ({
    section: Section.About,
    setSection: (section) => set({ section: section })
}));

export default useSection;
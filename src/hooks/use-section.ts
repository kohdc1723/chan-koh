import { create } from "zustand";

type SectionType = "About" | "Experience" | "Education" | "Projects" | "Skills";

interface SectionStore {
    section: SectionType;
    setSection: (section: SectionType) => void;
};

const useSection = create<SectionStore>(set => ({
    section: "About",
    setSection: (section) => set({ section: section })
}));

export default useSection;
import skills from "@/data/skills";
import SkillCategory from "@/app/(home)/_components/_skills/skill-category";

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col">
            <h3 className="sticky lg:static top-0 pt-5 lg:pt-20 pb-5 px-5 lg:px-0 text-2xl font-black z-10 bg-neutral-800">
                Skills
            </h3>
            
            <div className="flex flex-col gap-1 py-10 px-5 lg:px-0">
                {skills.map(skill => (
                    <SkillCategory key={skill.category} skill={skill} />
                ))}
            </div>
        </section>
    );
};
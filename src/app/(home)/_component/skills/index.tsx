import skills from "@/data/skills";
import SkillItem from "@/app/(home)/_component/skills/skill-item";

export default function Skills() {
    return (
        <section className="h-[100vh] bg-neutral-700">
            Skills
            {skills.map(skill => (
                <SkillItem skill={skill} />
            ))}
        </section>
    );
};
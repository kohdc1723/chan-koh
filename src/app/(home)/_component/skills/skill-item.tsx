import { SkillDataType } from "@/data/skills";

interface SkillItemProps {
    skill: SkillDataType;
};

export default function SkillItem({
    skill
}: SkillItemProps) {
    return (
        <article>
            <h4>{skill.category}</h4>
            <div>
                {skill.skills.map(sk => (
                    <span><sk.logo /></span>
                ))}
            </div>
        </article>
    );
};
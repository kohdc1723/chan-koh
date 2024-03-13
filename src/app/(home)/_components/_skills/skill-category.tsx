import { SkillDataType } from "@/data/skills";
import SkillItem from "./skill-item";


interface SkillCategoryProps {
    skill: SkillDataType;
};

export default function SkillCategory({
    skill
}: SkillCategoryProps) {
    return (
        <div className="p-5 rounded-md flex flex-col gap-3 backdrop-brightness-125 hover:backdrop-brightness-150">
            <h4 className="text-lg font-bold">{skill.category}</h4>
            <div className="flex gap-3 flex-wrap">
                {skill.skills.map(skill => (
                    <SkillItem key={skill.skill} skill={skill} />
                ))}
            </div>
        </div>
    );
};
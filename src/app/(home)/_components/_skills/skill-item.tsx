import { SkillType } from "@/data/skills";

interface SkillItemProps {
    skill: SkillType;
};

export default function SkillItem({
    skill
}: SkillItemProps) {
    return (
        <span style={{ color: skill.textColor, backgroundColor: skill.bgColor }} className={`flex gap-2 px-2 py-1 items-center text-sm w-auto rounded-md`}>
            {skill.logo && <skill.logo />}
            <span className="font-medium">{skill.skill}</span>
        </span>
    );
};
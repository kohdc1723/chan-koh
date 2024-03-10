import experience from "@/data/experience";
import ExperienceItem from "@/app/(home)/_component/experience/experience-item";

export default function Experience() {
    return (
        <section className="flex flex-col gap-10 p-3">
            <h3 className="text-xl font-black">Experience</h3>
            {experience.map(exp => (
                <ExperienceItem key={exp.company} experience={exp} />
            ))}
        </section>
    );
};
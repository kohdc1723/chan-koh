import experience from "@/data/experience";
import ExperienceItem from "@/app/(home)/_components/_experience/experience-item";

export default function Experience() {
    return (
        <section id="experience" className="flex flex-col">
            <h3 className="sticky lg:static top-0 pt-5 lg:pt-20 pb-5 px-5 lg:px-0 text-2xl font-black z-10 bg-neutral-800">
                Experience
            </h3>
            <div className="flex flex-col gap-1 py-10 px-5 lg:px-0">
                {experience.map(exp => (
                    <ExperienceItem key={exp.company} experience={exp} />
                ))}
            </div>
        </section>
    );
};
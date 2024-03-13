import education from "@/data/education";
import EducationItem from "@/app/(home)/_components/_education/education-item";

export default function Education() {
    return (
        <section id="education" className="flex flex-col">
            <h3 className="sticky lg:static top-0 pt-5 lg:pt-20 pb-5 px-5 lg:px-0 text-2xl font-black z-10 bg-neutral-800">
                Education
            </h3>
            <div className="flex flex-col gap-1 py-10 px-5 lg:px-0">
                {education.map((edu, index) => (
                    <EducationItem key={index} education={edu} />
                ))}
            </div>
        </section>
    );
};
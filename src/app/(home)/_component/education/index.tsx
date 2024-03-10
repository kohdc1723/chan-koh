import education from "@/data/education";
import EducationItem from "@/app/(home)/_component/education/education-item";

export default function Education() {
    return (
        <section className="flex flex-col gap-10 p-3">
            <h3 className="text-xl font-black">Education</h3>
            {education.map(edu => (
                <EducationItem education={edu} />
            ))}
        </section>
    );
};
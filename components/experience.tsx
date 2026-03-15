import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {experience.map((exp, index) => (
          <Card key={index}>
            <CardHeader className="flex gap-4 items-center">
              <Image
                src={exp.logo}
                alt={exp.company}
                className="size-20 rounded-md ring-2 ring-accent"
              />
              <div className="flex flex-col gap-1 w-full">
                <CardTitle className="flex flex-col">
                  <h4 className="font-semibold">
                    {exp.position}
                  </h4>
                  <p className="text-sm">
                    {exp.company} • {exp.employmentType}
                  </p>
                </CardTitle>
                <CardDescription className="text-sm font-medium flex flex-col">
                  <p>{exp.location} • {exp.locationType}</p>
                  <p>{exp.period}</p>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {exp.description.map((desc, index) => (
                  <li
                    key={index}
                    className="flex gap-2"
                  >
                    <span>•</span>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
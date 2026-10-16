import { Fragment } from "react";
import Image from "next/image";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Card
      id="experience"
      className="ring-0"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {experience.map((exp, index) => (
          <Fragment key={index}>
            <Card className="rounded-none ring-0">
              <CardHeader className="flex gap-4 items-center">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  className={cn(
                    "size-20 rounded-md grayscale-50",
                    !("logoFill" in exp) && "bg-gray-100 object-contain p-2",
                    "logoInvertDark" in exp && "dark:invert"
                  )}
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
                  <CardDescription className="font-medium flex flex-col">
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
            <Separator />
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
}
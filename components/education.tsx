import { Fragment } from "react";
import Image from "next/image";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { education } from "@/data/education";

export default function Education() {
  return (
    <Card
      id="education"
      className="ring-0"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {education.map((edu, index) => (
          <Fragment key={index}>
            <Card className="rounded-none ring-0">
              <CardHeader className="flex items-center gap-4">
                <Image
                  src={edu.logo}
                  alt={edu.school}
                  className="size-20 rounded-md grayscale-50"
                />
                <div className="flex flex-col gap-1 w-full">
                  <CardTitle className="flex flex-col">
                    <h4 className="font-semibold">{edu.school}</h4>
                    <p className="text-sm">
                      {edu.degree}, {edu.fieldOfStudy}
                    </p>
                  </CardTitle>
                  <CardDescription className="font-medium flex flex-col">
                    <p>{edu.location}</p>
                    <p>{edu.period}</p>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {edu.description.map((desc, index) => (
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
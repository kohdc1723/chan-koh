import { Fragment } from "react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Card
      id="skills"
      className="ring-0"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {skills.map((item, index) => (
          <Fragment key={index}>
            <Card className="rounded-none ring-0">
              <CardHeader>
                <CardTitle className="font-semibold">
                  {item.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="h-6 text-xs font-medium py-1 px-2 rounded-md flex items-center gap-2"
                    >
                      <skill.icon className="size-4 shrink-0" />
                      {skill.name}
                    </Badge>
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
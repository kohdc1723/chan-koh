import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {skills.map((item, index) => (
          <Card key={index}>
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
        ))}
      </CardContent>
    </Card>
  );
}
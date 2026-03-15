import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { FaGithub, FaLink } from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  return (
    <Card
      id="projects"
      className="ring-0"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="ring-0 rounded-none border-b"
          >
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="font-semibold">
                {project.name}
              </CardTitle>
              <CardDescription className="font-medium">
                {project.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="flex gap-2"
                  >
                    <span>•</span>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1">
                {project.links.map((link, index) => (
                  <li
                    key={index}
                    className="flex gap-2 items-center"
                  >
                    <span>
                      {link.type === "github" ? (
                        <FaGithub className="size-4" />
                      ) : (
                        <FaLink className="size-4" />
                      )}
                    </span>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="h-6 text-xs font-medium py-1 px-2 rounded-md flex items-center gap-2"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
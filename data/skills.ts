import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiDotnet,
  SiSupabase,
  SiClaude,
  SiGit,
  SiDocker,
  SiMysql,
  SiHibernate,
  SiMongodb,
  SiPrisma,
  SiGithub,
  SiGithubactions
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";


export const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C#", icon: TbBrandCSharp },
    ]
  },
  {
    category: "Front-end",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ]
  },
  {
    category: "Back-end",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Firebase", icon: IoLogoFirebase },
      { name: "Supabase", icon: SiSupabase },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JPA", icon: SiHibernate },
      { name: "Entity Framework", icon: SiDotnet },
      { name: "Prisma", icon: SiPrisma },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
    ]
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Claude Code", icon: SiClaude },
      { name: "Cursor", icon: null },
    ]
  }
] as const;
export const projects = [
  {
    name: "Spring Log",
    period: "03/2026 - Present",
    description: [
      "A full-stack social media application project to learn Spring Boot",
      "Implemented authentication using Spring Security (JWT, OAuth2, Refresh Token Rotation)"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    links: [
      {
        type: "github",
        label: "github/spring-log-frontend",
        url: "https://github.com/kohdc1723/spring-log-frontend",
      },
      {
        type: "github",
        label: "github/spring-log-backend",
        url: "https://github.com/kohdc1723/spring-log-backend",
      }
    ]
  },
  {
    name: "Chan.Koh",
    period: "03/2026",
    description: [
      "A personal portfolio website to showcase my projects and skills",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "live",
        label: "live/chankoh",
        url: "https://chankoh.vercel.app",
      },
      {
        type: "github",
        label: "github/chan-koh",
        url: "https://github.com/kohdc1723/chan-koh",
      },
    ]
  },
] as const;
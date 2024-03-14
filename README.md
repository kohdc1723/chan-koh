# Chan.Koh
Chan.Koh is my portfolio website where I present my information and showcase my work

# Tech Stack
![typescript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![zustand](https://img.shields.io/badge/zustand-3178C6?style=for-the-badge&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwind%20css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# Project Structure
    .
    ├── .next
    ├── public
    │
    ├── src
    │   ├── app
    │   │   ├── _components
    │   │   │   └── _profile
    │   │   │       ├── email-button.tsx
    │   │   │       ├── nav-menu.tsx
    │   │   │       ├── profile.tsx
    │   │   │       ├── socials.tsx
    │   │   │       └── summary.tsx
    │   │   │
    │   │   ├── (home)
    │   │   │   ├── _components
    │   │   │   │   ├── _about
    │   │   │   │   │   └── about.tsx
    │   │   │   │   │
    │   │   │   │   ├── _education
    │   │   │   │   │   ├── education-item.tsx
    │   │   │   │   │   └── education.tsx
    │   │   │   │   │
    │   │   │   │   ├── _experience
    │   │   │   │   │   ├── experience-item.tsx
    │   │   │   │   │   └── experience.tsx
    │   │   │   │   │
    │   │   │   │   ├── _projects
    │   │   │   │   │   ├── project-item.tsx
    │   │   │   │   │   └── projects.tsx
    │   │   │   │   │
    │   │   │   │   └── _skills
    │   │   │   │       ├── skill-category.tsx
    │   │   │   │       ├── skill-item.tsx
    │   │   │   │       └── skills.tsx
    │   │   │   │
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   │
    │   │   ├── globals.css
    │   │   └── layout.tsx
    │   │
    │   ├── components
    │   │   └── ui
    │   │       ├── button.tsx
    │   │       ├── input.tsx
    │   │       ├── popover.tsx
    │   │       └── sonner.tsx
    │   │
    │   ├── data
    │   │   ├── education.ts
    │   │   ├── experience.ts
    │   │   ├── projects.ts
    │   │   ├── sections.ts
    │   │   └── skills.ts
    │   │
    │   ├── hooks
    │   │   └── use-section.ts
    │   │
    │   └── lib
    │       └── utils.ts
    │
    ├── .eslintrc.json
    ├── components.json
    ├── next-env.d.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── .gitignore
    └── README.md

import CookingHome from "../images/cooking-home.jpg";
import DeveloperJourneyMap from "../images/developer-journey-map.jpg";
import LoveYourPlanet from "../images/love-your-planet.jpg";

const projects = [
    {
        title: "Cooking Home",
        description: "Cooking Home offers users an extensive recipe search engine and recommends recipes based on their favorite foods and the ingredients they have at home",
        period: "OCT 2023 - NOV 2023",
        stack: ["MongoDB", "Express", "React", "Node.js", "Redux", "Edamam API", "Github Actions", "AWS"],
        projectLink: "https://cooking-home.kro.kr",
        githubLinks: [
            {
                title: "github/cooking-home-frontend",
                url: "https://github.com/kohdc1723/cooking-home-frontend"
            },
            {
                title: "github/cooking-home-backend",
                url: "https://github.com/kohdc1723/cooking-home-backend"
            }
        ],
        notionLink: "",
        image: CookingHome
    },
    {
        title: "Love Your Planet Mobile App",
        description: "Love Your Planet is an easy-to-use mobile social media application for sustainability",
        period: "APR 2023 - MAY 2023",
        stack: ["MongoDB", "Express", "React Native", "Node.js", "Redux", "Firebase"],
        projectLink: "",
        githubLinks: [],
        notionLink: {
            title: "notion/love-your-planet-mobile-app",
            url: "https://stump-clavicle-74d.notion.site/Love-Your-Planet-Mobile-App-b6db8484bdb84548991dc0b169ebf4a7"
        },
        image: LoveYourPlanet
    },
    {
        title: "Developer Journey Map",
        description: "Developer Journey Map is a visualization tool that identifies the path a developer follows and experiences",
        period: "JAN 2023 - APR 2023",
        stack: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Google Cloud"],
        projectLink: "",
        githubLinks: [],
        notionLink: {
            title: "notion/developer-journey-map",
            url: "https://stump-clavicle-74d.notion.site/Developer-Journey-Map-1811046303934666abf5cff0bd9f84e5"
        },
        image: DeveloperJourneyMap
    }
];

export default projects;
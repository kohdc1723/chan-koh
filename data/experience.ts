import visaflo from "@/public/visaflo.png";
import torder from "@/public/torder.png";
import lyp from "@/public/lyp.png";
import devrel from "@/public/devrel.png";

export const experience = [
  {
    position: "Full Stack Developer",
    employmentType: "Permanent Full-Time",
    company: "VisaFlo",
    location: "Vancouver, BC",
    locationType: "Hybrid",
    period: "07/2024 - Present",
    logo: visaflo,
    description: [
      "Lead the development of the Chrome Extension for IRCC Online Form Autofill using Plasmo; overhauling the autofill engine by replacing legacy DOM manipulation with API injection, achieving 20x performance boost (from 8 minutes to under 25 seconds)",
      "Develop and enhance an AI-powered document scanner using Google Vision OCR and OpenAI Function Calling, reducing manual data entry time by over 50% through automated data extraction and form field mapping",
      "Automated an Nginx reverse proxy pipeline on AWS Lightsail to provide white-label solutions, currently utilized by 40+ client firms",
      "Develop and maintain a CRM dashboard (React, Node.js, Express.js, Firebase) supporting 80+ immigration firms and 280+ active users, streamlining client and lead management and case workflows",
      "Scale the system and iteratively enhance features based on client feedback, driving 40x growth in B2B clients (from 2 to 80+ firms)",
    ]
  },
  {
    position: "IT Technician",
    employmentType: "Permanent Full-Time",
    company: "t'order",
    location: "Vancouver, BC",
    locationType: "On-site",
    period: "04/2024 - 07/2024",
    logo: torder,
    description: [
      "Integrated tablet ordering software with clients' POS systems to ensure tablet orders are linked to their POS systems",
      "Troubleshot issues regarding POS systems and tablet ordering systems reported by clients",
      "Provided remote technical support for clients' requests using Anydesk and TeamViewer",
      "Installed and configured printers and network routers"
    ]
  },
  {
    position: "Software Developer",
    employmentType: "Internship",
    company: "Love Your Planet",
    location: "Chilliwack, BC",
    locationType: "Remote",
    period: "04/2023 - 05/2023",
    logo: lyp,
    description: [
      "Built a social media app promoting sustainable living and environmental awareness using React Native",
      "Implemented an environmental bill tracker feature using LEGISinfo API to monitor the progress of environmental legislation",
      "Resolved a backlog of 4 critical UI bugs and refactored UI components to align with HIG for the App Store release"
    ]
  },
  {
    position: "Software Developer",
    employmentType: "Internship",
    company: "DevRel.Agency",
    location: "Vancouver, BC",
    locationType: "Remote",
    period: "01/2023 - 04/2023",
    logo: devrel,
    description: [
      "Developed a Trello-style dashboard application, Developer Journey Map, using React, Node.js, Express.js, and MongoDB",
      "Deployed and configured the application on Google Cloud Platform"
    ]
  },
] as const;
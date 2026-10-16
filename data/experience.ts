import visaflo from "@/public/visaflo.png";
import torder from "@/public/torder.png";
import lyp from "@/public/lyp.png";
import devrel from "@/public/devrel.png";

export const experience = [
  {
    position: "Software Engineer",
    employmentType: "Permanent Full-Time",
    company: "VisaFlo",
    location: "Vancouver, BC",
    locationType: "Hybrid",
    period: "07/2024 - Present",
    logo: visaflo,
    logoFill: true,
    logoInvertDark: true,
    description: [
      "Grew B2B client base from 2 to 90+ firms by shipping features iteratively from client feedback and scaling infrastructure to match demand",
      "Achieved performance boost from 8 minutes to 25 seconds in IRCC online form autofill, overhauling the autofill engine from legacy DOM manipulation to API injection",
      "Automated filling of PDF immigration forms, unsupported by standard PDF libraries, by running Adobe Acrobat on a Windows server and executing event scripts",
      "Streamlined casework by building an AI agent that pre-fills application forms from client emails and WhatsApp threads and flags discrepancies against submitted documents",
      "Develop and maintain a CRM dashboard using React and Node.js, providing 90+ immigration firms and 400+ employees with streamlined client, lead, and case management workflows",
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
      "Integrated the LEGISinfo API to develop a bill tracker for monitoring the progress of environmental legislation",
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
      "Built a Trello-style dashboard app \"Developer Journey Map\" using React to visualize and manage developer experience stages from discovery to adoption",
      "Developed RESTful APIs using Express.js and MongoDB to support backend functionality",
      "Deployed and configured the application on Google Cloud Platform"
    ]
  },
] as const;
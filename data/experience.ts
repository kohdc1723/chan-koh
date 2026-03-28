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
      "Drive 40x growth in B2B clients from 2 to 80+ firms through iterative feature development and enhancement based on client feedback, scaling the system alongside increasing demand",
      "Achieve 20x performance boost from 8 minutes to under 25 seconds in IRCC online form autofill, overhauling the autofill engine from legacy DOM manipulation to API injection",
      "Enable scalable white-label solutions serving 40+ client firms, implementing an Nginx reverse proxy on AWS Lightsail",
      "Reduce manual data entry time by 50%+ across all case workflows, building an AI-powered document scanner with Google Vision OCR and OpenAI Function Calling",
      "Automate IRCC PDF form filling with a dynamic XFA PDF generation pipeline by scripting Adobe Acrobat using Python on Windows Server",
      "Develop and maintain a CRM dashboard using React and Express.js, providing 80+ immigration firms and 280+ employees with streamlined client, lead, and case management workflows",
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
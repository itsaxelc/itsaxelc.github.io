import { asset } from "@/lib/base-path";

import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  videoArr?: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  paperLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

// TODO: replace these sample projects with your own. Images, videos and PDFs
// go in `public/projects/<project-id>/` and are referenced with asset().
export const Projects: ProjectInterface[] = [
  {
    id: "project-one",
    companyName: "Project One",
    type: "Personal",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "One or two sentences on what this project is and what it does.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Next.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-06-01"),
    companyLogoImg: asset("/projects/project-one/cover.png"),
    pagesInfoArr: [
      {
        title: "Section title",
        description:
          "Describe one part of the project here and add screenshots to imgArr.",
        imgArr: [asset("/projects/project-one/cover.png")],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Explain the problem this project solves and how you approached it.",
        "Add a second paragraph on the result or what you learned.",
      ],
      bullets: [
        "A concrete thing you built or a result you measured.",
        "Another highlight.",
      ],
    },
  },
  {
    id: "project-two",
    companyName: "Project Two",
    type: "Personal",
    category: ["Frontend", "UI/UX"],
    shortDescription:
      "One or two sentences on what this project is and what it does.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React", "Typescript"],
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: asset("/projects/project-two/cover.png"),
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Explain the problem this project solves and how you approached it.",
      ],
      bullets: ["A concrete thing you built or a result you measured."],
    },
  },
  {
    id: "project-three",
    companyName: "Project Three",
    type: "Professional",
    category: ["Backend"],
    shortDescription:
      "One or two sentences on what this project is and what it does.",
    websiteLink: "",
    githubLink: "",
    techStack: ["Python", "PostgreSQL", "Docker"],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-08-01"),
    companyLogoImg: asset("/projects/project-three/cover.png"),
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Explain the problem this project solves and how you approached it.",
      ],
      bullets: ["A concrete thing you built or a result you measured."],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);

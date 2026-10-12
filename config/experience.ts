import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

// TODO: replace these sample entries with your own, newest first. A logo is
// optional: put it in `public/experience/` and wrap the path with asset().
export const experiences: ExperienceInterface[] = [
  {
    id: "company-one",
    position: "Your Role",
    company: "Company or Organisation",
    location: "City, Country",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "What you are responsible for in this role.",
      "A project or area you own.",
    ],
    achievements: ["A result you delivered, with a number if you have one."],
    skills: ["Typescript", "React", "Node.js"],
    companyUrl: "",
    logo: "",
  },
  {
    id: "company-two",
    position: "Previous Role",
    company: "Previous Company",
    location: "City, Country",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-12-01"),
    description: ["What you were responsible for in this role."],
    achievements: ["A result you delivered."],
    skills: ["Python", "SQL"],
    companyUrl: "",
    logo: "",
  },
  {
    id: "education",
    position: "Degree or Programme",
    company: "School or University",
    location: "City, Country",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-06-01"),
    description: ["What you studied and what you focused on."],
    achievements: ["An award, thesis, or notable project."],
    skills: [],
    companyUrl: "",
    logo: "",
  },
];

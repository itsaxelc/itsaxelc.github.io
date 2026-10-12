import { ValidPages } from "./constants";
import { siteConfig } from "./site";

const author = siteConfig.authorName;

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: `${author}'s portfolio website.`,
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        `${author}'s key skills.`,
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        `${author}'s projects.`,
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: `Contact ${author}.`,
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source projects and contributions.",
    metadata: {
      title: "Contributions",
      description: `${author}'s open-source projects and contributions.`,
    },
  },
  resume: {
    title: "Resume",
    description: `${author}'s resume.`,
    metadata: {
      title: "Resume",
      description: `${author}'s resume.`,
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Notes on what I am building and learning.",
    metadata: {
      title: "Blogs",
      description:
        `${author}'s blog.`,
    },
  },
  experience: {
    title: "Experience",
    description: "Where I have worked and what I did there.",
    metadata: {
      title: "Experience",
      description:
        `${author}'s experience.`,
    },
  },
  community: {
    title: "Community & Leadership",
    description:
      "Volunteering, leadership, and involvement beyond work.",
    metadata: {
      title: "Community & Leadership",
      description:
        `${author}'s leadership and community involvement.`,
    },
  },
};

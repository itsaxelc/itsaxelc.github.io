import { asset, basePath } from "@/lib/base-path";

// TODO: replace the placeholder values in this file with your own.
const authorName = "Cedric";
const username = "itsaxelc";
const origin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN || `https://${username}.github.io`;

export const PLACEHOLDER_USERNAME = "your-github-username";

export const siteConfig = {
  name: `${authorName} - Portfolio`,
  authorName,
  username,
  // Shown under the name in the hero section.
  jobTitle: "Your Title / What You Do",
  tagline:
    "A one-sentence summary of what you build and what you care about. Edit it in config/site.ts.",
  // Each entry is one paragraph of the About section.
  about: [
    "Write a short introduction here: who you are, what you study or work on, and what got you started.",
    "Use a second paragraph for what you are building now and what you do outside of work.",
  ],
  description: `${authorName}'s portfolio. Explore my projects, experience, and contributions.`,
  origin,
  url: `${origin}${basePath}`,
  email: "your.email@example.com",
  // Paste a Formspree endpoint (https://formspree.io/f/xxxxxxx) to receive
  // contact form messages. While empty, the form opens the visitor's email app.
  contactFormEndpoint: "",
  links: {
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle/",
    github: `https://github.com/${username}`,
  },
  // Repos shown with live stats on the Contributions page, as "owner/repo".
  githubActivityRepos: [] as string[],
  ogImage: asset("/og-image.png"),
  keywords: [authorName, "Portfolio", "Software Engineer", "Developer"],
};

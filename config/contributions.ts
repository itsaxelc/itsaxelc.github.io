import { siteConfig } from "./site";

export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

// TODO: replace with repositories you own or have contributed to.
export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "repository-one",
    contibutionDescription: "What the repository is and what you did in it.",
    repoOwner: siteConfig.username,
    link: `${siteConfig.links.github}/repository-one`,
  },
  {
    repo: "repository-two",
    contibutionDescription: "What the repository is and what you did in it.",
    repoOwner: siteConfig.username,
    link: `${siteConfig.links.github}/repository-two`,
  },
  {
    repo: "repository-three",
    contibutionDescription: "What the repository is and what you did in it.",
    repoOwner: siteConfig.username,
    link: `${siteConfig.links.github}/repository-three`,
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);

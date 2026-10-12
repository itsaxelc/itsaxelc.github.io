import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

// TODO: edit to match your own skills. `rating` is out of 5; available icons
// are listed in components/common/icons.tsx.
export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Build fast web apps with routing, layouts, and static generation.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, and props.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design modern websites faster with a utility-first CSS framework.",
    rating: 4,
    icon: Icons.tailwindcss,
  },
  {
    name: "Node.js",
    description: "Run JavaScript on the server to build APIs and tooling.",
    rating: 3,
    icon: Icons.nodejs,
  },
  {
    name: "Python",
    description: "Analyze data, automate workflows, and prototype ideas.",
    rating: 3,
    icon: Icons.python,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);

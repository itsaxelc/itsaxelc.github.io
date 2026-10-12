export interface CommunityInterface {
  name: string;
  role: string;
  period: string;
  description: string[];
}

// TODO: replace with your own volunteering, leadership and club activities.
export const communityInvolvement: CommunityInterface[] = [
  {
    name: "Organisation or Club",
    role: "Your role",
    period: "2025 – Present",
    description: ["What you do there and what it has achieved."],
  },
  {
    name: "Another Organisation",
    role: "Your role",
    period: "2024 – 2025",
    description: ["What you did there."],
  },
];

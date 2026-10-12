// TODO: replace with your own. Shown on the Experience page.
export const academicStats = {
  school: "School or University",
  gpa: "–",
  gpaType: "Unweighted",
  gradeLevel: "–",
  major: "Field of study",
};

export interface HonorInterface {
  title: string;
  issuer: string;
  date: string;
  type: "Award" | "Certification" | "Leadership" | "Research";
}

export const honors: HonorInterface[] = [
  {
    title: "An award you received",
    issuer: "Who awarded it",
    date: "2026",
    type: "Award",
  },
  {
    title: "A certification you earned",
    issuer: "Issuing organisation",
    date: "2025",
    type: "Certification",
  },
];

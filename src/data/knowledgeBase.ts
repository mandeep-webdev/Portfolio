import { resumeData } from "./data";

export interface Document {
  title: string;
  content: string;
}

export const knowledgeBase: Document[] = [
  {
    title: "About Me",
    content: resumeData.basics.summary,
  },
  {
    title: "Experience",
    content: resumeData.experience
      .map(
        (exp) =>
          `${exp.role} at ${exp.company} (${exp.period}): ${exp.bullets.join(
            " ",
          )}`,
      )
      .join(" "),
  },
  {
    title: "Skills",
    content: resumeData.skills
      .map((skill) => `${skill.category}: ${skill.items.join(", ")}`)
      .join(" | "),
  },
  {
    title: "Projects",
    content: resumeData.projects
      .map(
        (proj) => `${proj.title}: ${proj.bullets.join(" ")} Tech: ${proj.tech}`,
      )
      .join(" | "),
  },
];

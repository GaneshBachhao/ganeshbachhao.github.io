export interface Project {
  id: number;

  category: string;
  title: string;
  summary: string;

  problem: string;
  scale: string;
  architecture: string;

  approach: string;
  technologyRationale: string;
  tradeoffs: string;

  impact: string;

  achievements: string[];

  lessonsLearned: string;

  leadership: string;

  techStack: string[];
}
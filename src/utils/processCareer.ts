import careerData from '../data/careerData.json';

interface RecommendationData {
  path: { focus: string; outcomes: { salary_ca: { range: number[] }; remote_availability: string }; certifications: Array<{ name: string; cost: number }> };
  timeline: Array<{ [key: string]: string }>;
  estimatedSalary: number;
}

interface UserInput {
  experience_years: number;
  salary_target: string;
  career_pivot: string[];
  current_salary?: number;
  location?: string;
  education?: string;
  goals?: {
    salary_target: string;
    work_preference: string;
    career_pivot: string[];
    concerns: string;
  };
}

export function getRecommendations(userInput: UserInput): RecommendationData | null {
  const { pathways, recommendations } = careerData as any;
  let suggestedPath = recommendations.primary_path.toLowerCase();
  if (userInput.career_pivot.includes('Tech') && userInput.salary_target === '100000+') {
    suggestedPath = 'tech_track';
  } else if (userInput.experience_years >= 3) {
    suggestedPath = 'construction_track';
  }
  const path = pathways.find((p: any) => p.id === suggestedPath);
  if (!path) return null;

  const adjustedTimeline = path.timeline.breakdown.map((step: any, idx: number) => ({
    ...step,
    duration: userInput.experience_years > 5 ? `${idx * 3}- ${(idx + 1) * 3} months (accelerated)` : Object.values(step)[0]
  }));

  return {
    path,
    timeline: adjustedTimeline,
    estimatedSalary: path.outcomes.salary_ca.median,
  };
}

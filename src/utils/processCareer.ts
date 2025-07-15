import careerData from '../data/careerData.json';

interface UserInput {
  experience_years: number;
  salary_target: string;
  career_pivot: string[];  // Now array
  // Add other fields if needed
}

export function getRecommendations(userInput: UserInput) {
  const { pathways, recommendations } = careerData as any;  // Type careerData if possible
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

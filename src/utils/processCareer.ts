import careerData from '../data/careerData.json';

export function getRecommendations(userInput: { experience_years: number; salary_target: string; career_pivot: string }) {
  const { pathways, recommendations } = careerData;
  let suggestedPath = recommendations.primary_path.toLowerCase();
  if (userInput.career_pivot.includes('tech') && userInput.salary_target === '100000+') {
    suggestedPath = 'tech_track';
  } else if (userInput.experience_years >= 3) {
    suggestedPath = 'construction_track';
  }
  const path = pathways.find(p => p.id === suggestedPath);
  if (!path) return null;

  // Adjust timeline/cost based on input (e.g., reduce time if high exp)
  const adjustedTimeline = path.timeline.breakdown.map((step, idx) => ({
    ...step,
    duration: userInput.experience_years > 5 ? `${idx * 3}- ${(idx + 1) * 3} months (accelerated)` : Object.values(step)[0]
  }));

  return {
    path,
    timeline: adjustedTimeline,
    estimatedSalary: path.outcomes.salary_ca.median,
    // Add more computations, e.g., total_cost adjusted by transfers
  };
}
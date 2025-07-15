import dynamic from 'next/dynamic';

const CareerTimeline = dynamic(() => import('./Timeline'), { ssr: false });

interface RecommendationData {
  path: { focus: string; outcomes: { salary_ca: { range: number[] }; remote_availability: string }; certifications: Array<{ name: string; cost: number }> };
  timeline: Array<{ [key: string]: string }>;
  estimatedSalary: number;
}

export default function Recommendations({ data }: { data: RecommendationData | null }) {
  if (!data) return null;
  return (
    <div>
      <h2>Recommended Path: {data.path.focus}</h2>
      <table>
        <thead><tr><th>Aspect</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Salary Range</td><td>{data.path.outcomes.salary_ca.range.join('-')}</td></tr>
          <tr><td>Remote Availability</td><td>{data.path.outcomes.remote_availability}</td></tr>
        </tbody>
      </table>
      <h3>Timeline</h3>
      <CareerTimeline breakdown={data.timeline} />
      <ul>{data.path.certifications.map((cert) => <li key={cert.name}>{cert.name} - Cost: ${cert.cost}</li>)}</ul>
    </div>
  );
}

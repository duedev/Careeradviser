export default function Recommendations({ data }: { data: any }) {
  if (!data) return null;
  return (
    <div>
      <h2>Recommended Path: {data.path.focus}</h2>
      <table>
        <thead><tr><th>Aspect</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Salary Range</td><td>{data.path.outcomes.salary_ca.range.join('-')}</td></tr>
          <tr><td>Remote Availability</td><td>{data.path.outcomes.remote_availability}</td></tr>
          {/* Add more rows: job_roles list, total_cost */}
        </tbody>
      </table>
      <h3>Timeline</h3>
      <CareerTimeline breakdown={data.timeline} />
      <ul>{data.path.certifications.map((cert: any) => <li key={cert.name}>{cert.name} - Cost: ${cert.cost}</li>)}</ul>
    </div>
  );
}
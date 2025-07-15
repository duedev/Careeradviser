'use client';
import { useForm } from 'react-hook-form';

interface UserInput {
  current_role: string;
  experience_years: number;
  current_salary: number;
  location: string;
  education: string;
  goals: {
    salary_target: string;
    work_preference: string;
    career_pivot: string[];  // Array for checkboxes
    concerns: string;
  };
}

export default function UserForm({ onSubmit }: { onSubmit: (data: UserInput) => void }) {
  const { register, handleSubmit } = useForm<UserInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="user-input-form">
      <label htmlFor="current_role">Current Role</label>
      <input id="current_role" {...register('current_role')} required />

      <label htmlFor="experience_years">Experience Years</label>
      <input id="experience_years" type="number" {...register('experience_years')} required />

      <label htmlFor="current_salary">Current Salary</label>
      <input id="current_salary" type="number" {...register('current_salary')} required />

      <label htmlFor="location">Location</label>
      <input id="location" {...register('location')} required />

      <label htmlFor="education">Education</label>
      <select id="education" {...register('education')}>
        <option>No college credits</option>
        <option>Some credits</option>
        <option>Degree</option>
      </select>

      <fieldset>
        <legend>Goals</legend>
        <label htmlFor="salary_target">Salary Target</label>
        <select id="salary_target" {...register('goals.salary_target')}>
          <option>80000+</option>
          <option>100000+</option>
        </select>

        <div>
          <label>Work Preference</label>
          <label>
            <input type="radio" value="Remote" {...register('goals.work_preference')} /> Remote
          </label>
          <label>
            <input type="radio" value="Hybrid" {...register('goals.work_preference')} /> Hybrid
          </label>
        </div>

        <div>
          <label>Career Pivot</label>
          <label>
            <input type="checkbox" value="Tech" {...register('goals.career_pivot')} /> Tech (IT PM)
          </label>
          <label>
            <input type="checkbox" value="Construction" {...register('goals.career_pivot')} /> Stay in Construction
          </label>
        </div>

        <label htmlFor="concerns">Concerns</label>
        <textarea id="concerns" {...register('goals.concerns')} />
      </fieldset>

      <button type="submit">Get Recommendations</button>
    </form>
  );
}

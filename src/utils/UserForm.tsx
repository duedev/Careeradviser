'use client'; // Client-side for interactivity
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
    career_pivot: string;
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
      
      {/* Add other fields similarly: current_salary, location, education select */}
      
      <fieldset>
        <legend>Goals</legend>
        <label htmlFor="salary_target">Salary Target</label>
        <select id="salary_target" {...register('goals.salary_target')}>
          <option>80000+</option>
          <option>100000+</option>
        </select>
        {/* work_preference: radio (Remote, Hybrid), career_pivot: checkbox (Tech, Construction), concerns: textarea */}
      </fieldset>
      
      <button type="submit">Get Recommendations</button>
    </form>
  );
}
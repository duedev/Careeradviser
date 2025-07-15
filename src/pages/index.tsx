'use client';
import { useState } from 'react';
import UserForm from '../components/UserForm';
import Recommendations from '../components/Recommendations';
import { getRecommendations } from '../utils/processCareer';

interface RecommendationData {
  path: { focus: string; outcomes: { salary_ca: { range: number[] }; remote_availability: string }; certifications: Array<{ name: string; cost: number }> };
  timeline: Array<{ [key: string]: string }>;
  estimatedSalary: number;
}

export default function Home() {
  const [recData, setRecData] = useState<RecommendationData | null>(null);

  const handleSubmit = (userInput: any) => {
    const recommendations = getRecommendations(userInput);
    setRecData(recommendations);
  };

  return (
    <main>
      <h1>Career Adviser</h1>
      <UserForm onSubmit={handleSubmit} />
      {recData && <Recommendations data={recData} />}
    </main>
  );
}

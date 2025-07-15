'use client';
import { useState } from 'react';
import UserForm from '../components/UserForm';
import Recommendations from '../components/Recommendations';
import { getRecommendations } from '../utils/processCareer';

export default function Home() {
  const [recData, setRecData] = useState(null);

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
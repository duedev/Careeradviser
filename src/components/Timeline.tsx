'use client';
import { Timeline } from 'vis-timeline-react';
import { DataSet } from 'vis-data';

interface TimelineProps {
  breakdown: Array<{ [key: string]: string }>;
}

export default function CareerTimeline({ breakdown }: TimelineProps) {
  const items = new DataSet(breakdown.flatMap((step, idx) => {
    const [key, value] = Object.entries(step)[0];
    return { id: idx, content: value, start: new Date(Date.now() + idx * 30 * 24 * 60 * 60 * 1000) }; // Simulate months as days offset
  }));

  const options = {
    width: '100%',
    height: '200px',
    zoomable: true,
  };

  return <Timeline items={items} options={options} />;
}
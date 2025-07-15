'use client';
import { Chrono } from 'react-chrono';

interface TimelineProps {
  breakdown: Array<{ [key: string]: string }>;
}

export default function CareerTimeline({ breakdown }: TimelineProps) {
  const items = breakdown.map((step, idx) => {
    const [key, content] = Object.entries(step)[0];
    return {
      title: key,  // e.g., "months_1_3"
      cardTitle: content,  // e.g., "CACM prep/exam"
      timelineContent: <div>{content}</div>  // Custom content if needed
    };
  });

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"  // Or HORIZONTAL/TREE for variety
      useReadMore={false}  // Disable read more for simplicity
      theme={{ primary: 'blue', secondary: 'white' }}  // Customize colors
    />
  );
}

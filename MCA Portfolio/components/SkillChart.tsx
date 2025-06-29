"use client";
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import skillsData from '../public/skills-data.json';

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SkillChart() {
  const labels = skillsData.map(s => s.skill);
  const data = {
    labels,
    datasets: [
      {
        label: 'Proficiency',
        data: skillsData.map(s => s.level),
        backgroundColor: 'rgba(59,130,246,0.2)',
        borderColor: 'rgba(59,130,246,1)',
        pointBackgroundColor: 'rgba(59,130,246,1)'
      }
    ]
  };

  return (
    <div className="max-w-md mx-auto">
      <Radar data={data} options={{
        scales: {
          r: { angleLines: { color: '#ccc' }, grid: { color: '#eee' }, min: 0, max: 10, ticks: { stepSize: 1 } }
        }
      }} />
    </div>
  );
}
// This component renders a radar chart displaying skill proficiency levels.
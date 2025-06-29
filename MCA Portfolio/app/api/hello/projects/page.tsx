import SkillChart from '../../components/SkillChart';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Data Insights Dashboard',
      desc: 'Built with Python, Dash and Pandas to visualize trends.',
      link: '#'
    },
    {
      title: 'Full‑Stack Web App',
      desc: 'React + Node.js + MongoDB app deployed on Vercel & Heroku.',
      link: '#'
    }
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-3xl" font-bold>Projects & Skills</h1>
      <SkillChart />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2">{p.desc}</p>
            {p.link && (
              <a href={p.link} className="text-blue-600 mt-2 inline-block">View More →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
// This page displays a list of projects and a skill chart.
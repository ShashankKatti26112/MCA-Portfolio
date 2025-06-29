export default function ProjectsPage() {
    const projects = [
      { title: 'Project One', desc: 'A full-stack app built with Node.js and React.' },
      { title: 'Data Analysis Project', desc: 'Python-based data insights and visualizations.' },
    ];
  
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="p-4 border rounded-md shadow">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
// This code defines a simple projects page that lists two projects with titles and descriptions.  
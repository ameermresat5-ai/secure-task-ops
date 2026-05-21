import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "DevSecOps Final Project",
      description: "Main project for the course.",
      tasks: 5,
    },
    {
      id: 2,
      name: "Frontend UI",
      description: "React pages and dashboard.",
      tasks: 3,
    },
  ];

  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

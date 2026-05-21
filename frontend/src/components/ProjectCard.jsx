function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p><strong>Tasks:</strong> {project.tasks}</p>
    </div>
  );
}

export default ProjectCard;

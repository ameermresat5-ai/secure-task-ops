function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="card-header">
        <h3>{project.name}</h3>
        <span className="badge primary">{project.tasks} tasks</span>
      </div>

      <p>{project.description}</p>

      <div className="progress-line">
        <div style={{ width: `${Math.min(project.tasks * 15, 100)}%` }}></div>
      </div>
    </div>
  );
}

export default ProjectCard;

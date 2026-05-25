function TaskCard({ task }) {
  const statusClass = task.status === "Done" ? "badge success" : "badge warning";
  const priorityClass =
    task.priority === "High"
      ? "badge danger"
      : task.priority === "Low"
      ? "badge muted"
      : "badge primary";

  return (
    <div className="card">
      <div className="card-header">
        <h3>{task.title}</h3>
        <span className={priorityClass}>{task.priority}</span>
      </div>

      <p>{task.description}</p>

      <div className="card-footer">
        <span className={statusClass}>{task.status}</span>
      </div>
    </div>
  );
}

export default TaskCard;

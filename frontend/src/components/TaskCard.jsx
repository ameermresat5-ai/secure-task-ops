function TaskCard({ task }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
    </div>
  );
}

export default TaskCard;

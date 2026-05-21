import TaskCard from "../components/TaskCard";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Create React frontend",
      description: "Build the first frontend pages.",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      title: "Connect API",
      description: "Connect frontend to Flask backend.",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Add Docker support",
      description: "Run frontend inside a Docker container.",
      status: "To Do",
      priority: "High",
    },
  ];

  return (
    <div className="page">
      <h1>Tasks</h1>
      <div className="grid">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;

import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

const defaultTasks = [
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

function loadTasks() {
  try {
    const savedTasks = localStorage.getItem("securetaskops_tasks");
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  } catch {
    return defaultTasks;
  }
}

function Tasks() {
  const [tasks, setTasks] = useState(loadTasks);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
  });

  useEffect(() => {
    localStorage.setItem("securetaskops_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleAddTask(event) {
    event.preventDefault();

    if (!formData.title.trim()) {
      alert("Task title is required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: "To Do",
      priority: formData.priority,
    };

    setTasks([...tasks, newTask]);
    setFormData({
      title: "",
      description: "",
      priority: "Medium",
    });
  }

  function handleCompleteTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "Done" } : task
      )
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleResetTasks() {
    setTasks(defaultTasks);
  }

  return (
    <div className="page">
      <h1>Tasks</h1>

      <form className="form" onSubmit={handleAddTask}>
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Task description"
          value={formData.description}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <button className="secondary-button" onClick={handleResetTasks}>
        Reset Default Tasks
      </button>

      <div className="grid margin-top">
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskCard task={task} />

            <div className="button-row">
              <button onClick={() => handleCompleteTask(task.id)}>
                Mark Done
              </button>

              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;

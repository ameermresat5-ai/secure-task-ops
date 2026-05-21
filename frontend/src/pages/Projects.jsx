import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([
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
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleAddProject(event) {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Project name is required");
      return;
    }

    const newProject = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      tasks: 0,
    };

    setProjects([...projects, newProject]);
    setFormData({ name: "", description: "" });
  }

  function handleDeleteProject(projectId) {
    setProjects(projects.filter((project) => project.id !== projectId));
  }

  return (
    <div className="page">
      <h1>Projects</h1>

      <form className="form" onSubmit={handleAddProject}>
        <input
          type="text"
          name="name"
          placeholder="Project name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Project description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>

      <div className="grid margin-top">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
            <button
              className="delete-button"
              onClick={() => handleDeleteProject(project.id)}
            >
              Delete Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

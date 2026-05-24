# SecureTaskOps

SecureTaskOps is a full-stack DevSecOps task management platform.

The application allows users to register, log in, create projects, manage tasks, and view task statistics.

The project demonstrates a DevSecOps workflow using GitHub, Pull Requests, CI/CD, Docker, Docker Compose, security actions, PostgreSQL, and cloud-ready infrastructure.

---

## Project Parts

### Application

- React frontend
- Python Flask backend API
- PostgreSQL database
- User register and login
- Projects management
- Tasks management

### DevOps

- Git and GitHub teamwork
- Feature branches
- Pull Requests
- GitHub Actions CI
- Docker images
- Docker Compose
- Container networking

### Security

- GitHub Security Actions workflow
- Bandit Python code scanning
- pip-audit dependency scanning
- npm audit frontend dependency scanning
- Secret pattern scanning
- Trivy Docker image scanning

---

## Completed Work

### Frontend

- React Vite frontend
- Dashboard page
- Projects page
- Tasks page
- Login page
- Register page
- Project form
- Task form
- localStorage support
- API service files
- Frontend Dockerfile
- Frontend CI workflow

### Backend

- Flask backend
- Health check endpoint
- SQLAlchemy database models
- User model
- Project model
- Task model
- UploadedFile model
- Register API
- Login API
- Projects API
- Tasks API
- Backend tests with pytest
- Backend Dockerfile
- Backend CI workflow

### Docker and DevOps

- Frontend Docker image
- Backend Docker image
- PostgreSQL container
- Docker Compose setup
- Container networking between frontend, backend, and database

### Security

- Security GitHub Actions workflow
- Bandit scan
- pip-audit scan
- npm audit scan
- Secret scan
- Trivy Docker image scan

---

## Run Full Project

Install Docker Compose if needed:

    apt update
    apt install -y docker-compose

Run the project:

    docker-compose up --build

Open:

    Frontend: http://localhost:8080
    Backend:  http://localhost:5000/api/health

Stop the project:

    docker-compose down

---

## Run Backend Tests

    cd backend
    source venv/bin/activate
    pytest

---

## GitHub Workflow

Main branches:

- main: stable branch
- develop: development branch
- feature/*: work branches

Workflow:

1. Create a feature branch from develop
2. Add the work
3. Push to GitHub
4. Open Pull Request into develop
5. Wait for GitHub Actions
6. Merge into develop

---

## Important Workflow Files

- .github/workflows/frontend-ci.yml
- .github/workflows/backend-ci.yml
- .github/workflows/security.yml

---

## Final Goal

The final goal is to show a professional DevSecOps project with a working full-stack app, Docker containers, CI/CD, security scanning, and clear GitHub teamwork.

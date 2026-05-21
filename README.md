# SecureTaskOps

SecureTaskOps is a full-stack DevSecOps task management platform.

The application allows users to register, log in, create projects, manage tasks, upload files, and view a dashboard with task statistics.

The goal of this project is to demonstrate a complete DevSecOps workflow using GitHub, CI/CD, Docker, security actions, Terraform, and cloud deployment.

---

## Project Parts

### Application

- React frontend
- Python Flask backend API
- PostgreSQL database
- User login/register
- Task management
- File upload to cloud storage or local storage

### DevOps

- Git + GitHub teamwork
- Branches and Pull Requests
- GitHub Actions CI/CD
- Docker images
- Docker Compose
- Container networking
- Deployment to cloud server

### Security

- Code scanning
- Dependency scanning
- Secret scanning
- Docker image scanning
- Basic authentication security
- Environment variables
- GitHub Security Actions workflow

### Infrastructure

- Terraform
- Cloud server: AWS EC2 or Azure VM
- Security groups / firewall
- Optional S3 bucket for uploaded files
- Optional Kubernetes deployment

---

## Frontend Progress

The frontend part is built with React and Vite.

Completed frontend work:

- Created React frontend structure
- Added navigation bar
- Added dashboard page
- Added projects page
- Added tasks page
- Added login page
- Added register page
- Added project form
- Added task form
- Added delete project button
- Added delete task button
- Added mark task as done button
- Added localStorage support for projects and tasks
- Added API service files for future backend connection
- Added Dockerfile for frontend
- Added .dockerignore
- Added GitHub Actions frontend CI workflow

---

## Frontend Technologies

- React
- Vite
- JavaScript
- CSS
- Axios
- React Router DOM
- Docker
- Nginx
- GitHub Actions

---

## Frontend Commands

Run frontend locally:

    cd frontend
    npm install
    npm run dev

Build frontend:

    cd frontend
    npm run build

Build frontend Docker image:

    cd frontend
    docker build -t securetaskops-frontend .

Run frontend Docker container:

    docker run -d --name securetaskops-frontend-test -p 8080:80 securetaskops-frontend

Stop frontend Docker container:

    docker stop securetaskops-frontend-test
    docker rm securetaskops-frontend-test

---

## GitHub Workflow

This project is developed using branches and Pull Requests.

Main branches:

- main: stable final version
- develop: development branch
- feature/*: feature branches

Workflow:

1. Create a feature branch from develop
2. Work on the feature
3. Push the branch to GitHub
4. Open a Pull Request into develop
5. Wait for GitHub Actions checks
6. Merge the Pull Request
7. Continue with the next feature

---

## Frontend Branches Completed

- feature/frontend
- feature/frontend-forms
- feature/frontend-local-storage
- feature/frontend-docker
- feature/frontend-ci
- feature/frontend-api-services

---

## CI/CD

The project includes a GitHub Actions workflow for the frontend.

Current workflow:

- .github/workflows/frontend-ci.yml

The workflow installs frontend dependencies and runs the React production build.

---

## Final Goal

The final project will include:

- Working React frontend
- Working Flask backend
- PostgreSQL database
- Docker Compose setup
- GitHub Actions CI/CD
- Security scanning workflow
- Terraform infrastructure
- Cloud deployment
- Professional documentation

# SecureTaskOps Project Plan

## Project Name

SecureTaskOps

## Project Description

SecureTaskOps is a full-stack DevSecOps task management platform.

The system allows users to register, log in, create projects, manage tasks, upload files, and view dashboard statistics.

The main goal of this project is to show a complete DevSecOps workflow, not only a normal web application. The project includes development, GitHub teamwork, CI/CD, Docker containers, security workflows, Terraform infrastructure, and cloud deployment.

---

## Main Features

### User Features

- Register account
- Login
- View dashboard
- Create projects
- Delete projects
- Create tasks
- Mark tasks as done
- Delete tasks
- Save frontend data using localStorage
- Prepare frontend for backend API connection

### Future Backend Features

- Flask REST API
- PostgreSQL database connection
- User authentication
- Project API
- Task API
- File upload API
- Health check endpoint

---

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- CSS
- Axios
- React Router DOM

### Backend

- Python
- Flask
- Flask-CORS
- SQLAlchemy
- PostgreSQL

### DevOps

- Git
- GitHub
- GitHub Pull Requests
- GitHub Actions
- Docker
- Docker Compose
- Linux
- Bash

### Security

- GitHub Security Actions workflow
- Code scanning
- Dependency scanning
- Secret scanning
- Docker image scanning
- Environment variables
- Basic authentication security

### Infrastructure

- Terraform
- AWS EC2 or Azure VM
- Security groups / firewall
- Optional S3 bucket
- Optional Kubernetes deployment

---

## Team Roles

### Team Member 1 — Frontend Developer

Responsible for:

- React project setup
- Navigation bar
- Dashboard page
- Login page
- Register page
- Projects page
- Tasks page
- Frontend forms
- localStorage support
- API service files
- Frontend Dockerfile
- Frontend CI workflow

### Team Member 2 — Backend Developer

Responsible for:

- Flask backend setup
- Database models
- Authentication API
- Projects API
- Tasks API
- File upload API
- Backend tests
- Backend Dockerfile

### Team Member 3 — DevOps / DevSecOps Engineer

Responsible for:

- Docker Compose
- GitHub Actions pipelines
- Security workflow
- Terraform files
- Cloud deployment
- Deployment scripts
- Documentation
- Final integration

---

## GitHub Workflow

The team will use branches and Pull Requests.

### Main Branches

- `main` — stable final version
- `develop` — development branch
- `feature/*` — feature branches

### Workflow Steps

1. Start from `develop`
2. Create a feature branch
3. Work on the feature
4. Commit changes
5. Push branch to GitHub
6. Open Pull Request into `develop`
7. Wait for GitHub Actions checks
8. Merge Pull Request
9. Pull latest `develop`

---

## Completed Frontend Branches

- `feature/frontend`
- `feature/frontend-forms`
- `feature/frontend-local-storage`
- `feature/frontend-docker`
- `feature/frontend-ci`
- `feature/frontend-api-services`
- `feature/update-readme-frontend`

---

## CI/CD Plan

The project will use GitHub Actions.

### Current CI

- Frontend CI workflow
- Installs frontend dependencies
- Runs React production build

### Planned CI/CD

- Backend tests
- Frontend build
- Docker image build
- Security scanning
- Docker image scanning
- Deployment to cloud server

---

## Docker Plan

The project will include containers for:

- React frontend
- Flask backend
- PostgreSQL database
- Optional Nginx reverse proxy

The final project should run locally using:

    docker compose up --build

---

## Security Plan

The project will include security workflows for:

- Code scanning
- Dependency scanning
- Secret scanning
- Docker image scanning
- Authentication security
- Environment variable usage

Security will be automated using GitHub Actions.

---

## Infrastructure Plan

Terraform will be used to create cloud infrastructure.

Planned resources:

- Cloud virtual machine
- Security group / firewall rules
- SSH access
- HTTP access
- Optional object storage bucket

---

## Final Deliverables

The final project should include:

- Working React frontend
- Working Flask backend
- PostgreSQL database
- Docker Compose setup
- GitHub Actions CI/CD workflows
- GitHub Security Actions workflow
- Terraform infrastructure files
- Cloud deployment
- README documentation
- Project plan documentation
- Pull Requests and commits showing teamwork

---

## Final Goal

The final goal is to build a professional DevSecOps project that shows how a real team develops, tests, secures, packages, and deploys a full-stack web application.

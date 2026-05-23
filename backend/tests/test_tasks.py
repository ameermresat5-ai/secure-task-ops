from app import app
from models import db, User, Project

def reset_database():
    with app.app_context():
        db.drop_all()
        db.create_all()


def create_test_project():
    user = User(
        full_name="Task Test User",
        email="task@example.com"
    )
    user.set_password("password123")
    db.session.add(user)
    db.session.commit()

    project = Project(
        name="Task Test Project",
        description="Project for task tests",
        user_id=user.id
    )
    db.session.add(project)
    db.session.commit()

    return project.id, user.id


def test_create_task():
    reset_database()

    with app.app_context():
        project_id, user_id = create_test_project()

    client = app.test_client()

    response = client.post("/api/tasks", json={
        "title": "Test Task",
        "description": "Task created from test",
        "status": "To Do",
        "priority": "High",
        "project_id": project_id,
        "assigned_user_id": user_id
    })

    assert response.status_code == 201
    assert response.json["message"] == "Task created successfully"
    assert response.json["task"]["title"] == "Test Task"


def test_get_tasks():
    reset_database()

    with app.app_context():
        project_id, user_id = create_test_project()

    client = app.test_client()

    client.post("/api/tasks", json={
        "title": "Task List Test",
        "description": "Testing get tasks",
        "project_id": project_id,
        "assigned_user_id": user_id
    })

    response = client.get("/api/tasks")

    assert response.status_code == 200
    assert len(response.json) == 1
    assert response.json[0]["title"] == "Task List Test"


def test_update_task():
    reset_database()

    with app.app_context():
        project_id, user_id = create_test_project()

    client = app.test_client()

    create_response = client.post("/api/tasks", json={
        "title": "Task To Update",
        "description": "Before update",
        "project_id": project_id,
        "assigned_user_id": user_id
    })

    task_id = create_response.json["task"]["id"]

    update_response = client.put(f"/api/tasks/{task_id}", json={
        "status": "Done",
        "priority": "Low"
    })

    assert update_response.status_code == 200
    assert update_response.json["message"] == "Task updated successfully"
    assert update_response.json["task"]["status"] == "Done"
    assert update_response.json["task"]["priority"] == "Low"


def test_delete_task():
    reset_database()

    with app.app_context():
        project_id, user_id = create_test_project()

    client = app.test_client()

    create_response = client.post("/api/tasks", json={
        "title": "Task To Delete",
        "description": "Testing delete task",
        "project_id": project_id,
        "assigned_user_id": user_id
    })

    task_id = create_response.json["task"]["id"]

    delete_response = client.delete(f"/api/tasks/{task_id}")

    assert delete_response.status_code == 200
    assert delete_response.json["message"] == "Task deleted successfully"

from app import app
from models import db, User

def create_test_user():
    user = User(
        full_name="Project Test User",
        email="project@example.com"
    )
    user.set_password("password123")
    db.session.add(user)
    db.session.commit()
    return user.id


def reset_database():
    with app.app_context():
        db.drop_all()
        db.create_all()


def test_create_project():
    reset_database()

    with app.app_context():
        user_id = create_test_user()

    client = app.test_client()

    response = client.post("/api/projects", json={
        "name": "Test Project",
        "description": "Project created from test",
        "user_id": user_id
    })

    assert response.status_code == 201
    assert response.json["message"] == "Project created successfully"
    assert response.json["project"]["name"] == "Test Project"


def test_get_projects():
    reset_database()

    with app.app_context():
        user_id = create_test_user()

    client = app.test_client()

    client.post("/api/projects", json={
        "name": "Project List Test",
        "description": "Testing get projects",
        "user_id": user_id
    })

    response = client.get("/api/projects")

    assert response.status_code == 200
    assert len(response.json) == 1
    assert response.json[0]["name"] == "Project List Test"


def test_delete_project():
    reset_database()

    with app.app_context():
        user_id = create_test_user()

    client = app.test_client()

    create_response = client.post("/api/projects", json={
        "name": "Project To Delete",
        "description": "Testing delete project",
        "user_id": user_id
    })

    project_id = create_response.json["project"]["id"]

    delete_response = client.delete(f"/api/projects/{project_id}")

    assert delete_response.status_code == 200
    assert delete_response.json["message"] == "Project deleted successfully"

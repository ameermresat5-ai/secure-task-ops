from app import app
from models import db

def test_register_user():
    with app.app_context():
        db.drop_all()
        db.create_all()

    client = app.test_client()

    response = client.post("/api/register", json={
        "full_name": "Ameer Test",
        "email": "ameer@example.com",
        "password": "password123"
    })

    assert response.status_code == 201
    assert response.json["message"] == "User registered successfully"
    assert response.json["user"]["email"] == "ameer@example.com"


def test_login_user():
    client = app.test_client()

    client.post("/api/register", json={
        "full_name": "Login User",
        "email": "login@example.com",
        "password": "password123"
    })

    response = client.post("/api/login", json={
        "email": "login@example.com",
        "password": "password123"
    })

    assert response.status_code == 200
    assert response.json["message"] == "Login successful"
    assert response.json["user"]["email"] == "login@example.com"


def test_login_wrong_password():
    client = app.test_client()

    client.post("/api/register", json={
        "full_name": "Wrong Password User",
        "email": "wrong@example.com",
        "password": "password123"
    })

    response = client.post("/api/login", json={
        "email": "wrong@example.com",
        "password": "badpassword"
    })

    assert response.status_code == 401
    assert response.json["error"] == "Invalid email or password"

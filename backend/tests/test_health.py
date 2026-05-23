from app import app

def test_health_route():
    client = app.test_client()
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json["status"] == "ok"
    assert response.json["message"] == "SecureTaskOps backend is running"

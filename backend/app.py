from flask import Flask
from flask_cors import CORS
from config import Config
from models import db, User, Project, Task, UploadedFile
from routes.auth_routes import auth_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)

    app.register_blueprint(auth_bp, url_prefix="/api")

    @app.route("/api/health")
    def health():
        return {
            "status": "ok",
            "message": "SecureTaskOps backend is running"
        }

    @app.route("/api/db-test")
    def db_test():
        return {
            "status": "ok",
            "message": "Database models are loaded",
            "models": ["User", "Project", "Task", "UploadedFile"]
        }

    with app.app_context():
        db.create_all()

    return app

app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

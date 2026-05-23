from app import app
from models import db, User, Project, Task

def test_create_user_project_task():
    with app.app_context():
        db.drop_all()
        db.create_all()

        user = User(
            full_name="Test User",
            email="test@example.com"
        )
        user.set_password("password123")

        db.session.add(user)
        db.session.commit()

        assert user.id is not None
        assert user.check_password("password123") is True

        project = Project(
            name="Test Project",
            description="Testing project model",
            user_id=user.id
        )

        db.session.add(project)
        db.session.commit()

        assert project.id is not None
        assert project.user_id == user.id

        task = Task(
            title="Test Task",
            description="Testing task model",
            status="To Do",
            priority="High",
            project_id=project.id,
            assigned_user_id=user.id
        )

        db.session.add(task)
        db.session.commit()

        assert task.id is not None
        assert task.project_id == project.id
        assert task.assigned_user_id == user.id

from flask import Blueprint, request, jsonify
from models import db, Project, Task

task_bp = Blueprint("tasks", __name__)

@task_bp.route("/tasks", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks]), 200


@task_bp.route("/tasks/<int:task_id>", methods=["GET"])
def get_task(task_id):
    task = Task.query.get(task_id)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    return jsonify(task.to_dict()), 200


@task_bp.route("/tasks", methods=["POST"])
def create_task():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing request body"}), 400

    title = data.get("title")
    description = data.get("description")
    status = data.get("status", "To Do")
    priority = data.get("priority", "Medium")
    project_id = data.get("project_id")
    assigned_user_id = data.get("assigned_user_id")

    if not title or not project_id:
        return jsonify({"error": "Task title and project_id are required"}), 400

    project = Project.query.get(project_id)

    if not project:
        return jsonify({"error": "Project not found"}), 404

    task = Task(
        title=title,
        description=description,
        status=status,
        priority=priority,
        project_id=project_id,
        assigned_user_id=assigned_user_id
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({
        "message": "Task created successfully",
        "task": task.to_dict()
    }), 201


@task_bp.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    task = Task.query.get(task_id)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing request body"}), 400

    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.status = data.get("status", task.status)
    task.priority = data.get("priority", task.priority)
    task.assigned_user_id = data.get("assigned_user_id", task.assigned_user_id)

    db.session.commit()

    return jsonify({
        "message": "Task updated successfully",
        "task": task.to_dict()
    }), 200


@task_bp.route("/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    task = Task.query.get(task_id)

    if not task:
        return jsonify({"error": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()

    return jsonify({"message": "Task deleted successfully"}), 200

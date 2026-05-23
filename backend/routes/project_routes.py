from flask import Blueprint, request, jsonify
from models import db, User, Project

project_bp = Blueprint("projects", __name__)

@project_bp.route("/projects", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    return jsonify([project.to_dict() for project in projects]), 200


@project_bp.route("/projects/<int:project_id>", methods=["GET"])
def get_project(project_id):
    project = Project.query.get(project_id)

    if not project:
        return jsonify({"error": "Project not found"}), 404

    return jsonify(project.to_dict()), 200


@project_bp.route("/projects", methods=["POST"])
def create_project():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Missing request body"}), 400

    name = data.get("name")
    description = data.get("description")
    user_id = data.get("user_id")

    if not name or not user_id:
        return jsonify({"error": "Project name and user_id are required"}), 400

    user = User.query.get(user_id)

    if not user:
        return jsonify({"error": "User not found"}), 404

    project = Project(
        name=name,
        description=description,
        user_id=user_id
    )

    db.session.add(project)
    db.session.commit()

    return jsonify({
        "message": "Project created successfully",
        "project": project.to_dict()
    }), 201


@project_bp.route("/projects/<int:project_id>", methods=["DELETE"])
def delete_project(project_id):
    project = Project.query.get(project_id)

    if not project:
        return jsonify({"error": "Project not found"}), 404

    db.session.delete(project)
    db.session.commit()

    return jsonify({"message": "Project deleted successfully"}), 200

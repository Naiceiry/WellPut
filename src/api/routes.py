"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, SeedDataUser
from api.utils import generate_sitemap, APIException
# to make the token
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash



api = Blueprint('api', __name__)


@api.route('/sign_up', methods=['POST'])
def sign_up_user():
    body_request = request.get_json()
    print('body_request', body_request)
    email_request = body_request.get("email", None)
    print('email_request', email_request)
    full_name_request = body_request.get("full_name", None)
    password_request = body_request.get("password", None)
    
    new_user = User(
        email = email_request, 
        full_name = full_name_request, 
        password = generate_password_hash(password_request, "sha256")
        )
    
    print('new_user', new_user)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify(body_request), 200

@api.route('/login', methods=['POST'])
def login_user():
    body_request = request.get_json()
    email_request = body_request.get("email", None)
    password_request = body_request.get("password", None)
    password_hash = generate_password_hash(password_request, "sha256")
    # to check the user existence
    if email_request == None or password_request == None:
        return jsonify({"msg": "Bad email or password"}), 401
    
    user_checked = User.query.filter_by(email = email_request).one_or_none()
    # to check email and contraseña
    if not user_checked or check_password_hash(password_hash, "wrong-passw@rd"):
        return jsonify("Your credentials are wrong, please try again"), 401
    
    # New token
    access_token = create_access_token(identity = user_checked.serialize())
    print('access_token', access_token)

    return jsonify({"access_token": access_token, "user": user_checked.serialize()}), 200

# ----------- to verify the identity of the user ----------
# IN this route is where the token is neccessary to access. Postman --> "Authorization" or "Header"
@api.route("/profile", methods=["GET", "PUT"])
@jwt_required()
def user_profile():
  identity = get_jwt_identity()
  user = current_user(get_jwt_identity())

  return jsonify(user.serialize())

# ----------- to verify the identity of the user ----------
def current_user(identity):
  print(identity["id"])
  return User.query.get(identity["id"])

# -------------------------- SEED -------------------------

@api.route('/seed_data_user', methods=['GET'])
def handle_seed_user_data():
    seeder = SeedDataUser()
    seeder.create_seed_data()

    return jsonify({"msg": "The user was created!" }), 200
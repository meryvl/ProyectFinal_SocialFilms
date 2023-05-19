"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@app.route('/users', methods=['GET'])
def getUsers():
    try:
        users = User.query.all()
        toReturn = [users.serialize() for users in users]
        return jsonify(toReturn), 200

    except Exception:
        return jsonify({"msg": "Ha ocurrido un error"}) , 500
    

@app.route('/user/<int:position>', methods=['GET'])
def getPeopleId(position):
    try:
       
        userId =  User.query.filter_by(id=position).first() 
        return jsonify(userId.serialize()), 200

    except Exception:
        return jsonify({"msg": "Ha ocurrido un error"}) , 500
    
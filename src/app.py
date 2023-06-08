"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User , ListsSee , Coments
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
#from models import Person
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)


app.config["JWT_SECRET_KEY"] = "111222333" # ¡Cambia las palabras "super-secret" por otra cosa!
jwt = JWTManager(app)


# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route('/new', methods=['POST'])
def newUser():
    body = request.json

    if body["email"] == None or body["password"] == None:
        return jsonify({"msg": "Insert and email or password"}), 400

    # Crear un nuevo usuario en la base de datos
    new_user = User(
            email = body["email"],
            password = body["password"], 
            name = body["name"], 
            lastname = body["lastname"],
             is_active = True
        )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"code": 200, "mensaje": "Usuario creado correctamente"})

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
    

@app.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })



@app.route('/newSee', methods=['POST'])
def newSee():
    body = request.json
    if body['idFilm'] == idFilm and body['idUsuario'] == idUsuario:
        return jsonify({"msg: Ya esta guardado esta pelicula con este usuario"}), 400
    # Crear un nuevo new see en la base de datos
    new_See = ListsSee(
            idFilm = body["idFilm"],
            idUsuario= body["idUsuario"],
        )

    db.session.add(new_See)
    db.session.commit()

    return jsonify({"code": 200, "mensaje": "new see creado"})

@app.route('/listSee', methods=['GET'])
def getSee():
    try:
        see = ListsSee.query.all()
        toReturn = [see.serialize() for see in see]
        return jsonify(toReturn), 200
    except Exception:
        return jsonify({"msg": "Ha ocurrido un error"}) , 500
    
@app.route('/listSee/<int:position>', methods=['GET'])
def getSeeUser(position):
    
    listsSeeUsuario = ListsSee.query.filter_by( idUsuario=position).first()
    return jsonify(listsSeeUsuario.serialize()), 200

    
       
        

@app.route('/newComent', methods=['POST'])
def newComent():
    body = request.json
    if body["text"] == None or body["idFilm"] == None:
        return jsonify({"msg": "No se han recogido correctamente los datos"}), 400
    # Crear un nuevo coment en la base de datos
    new_Coment = Coments(
            idUsuario= body["idUsuario"],
            text=body["text"],
            idFilm = body["idFilm"],
            
        )

    db.session.add(new_Coment)
    db.session.commit()

    return jsonify({"code": 200, "mensaje": "Usuario creado correctamente"})

@app.route('/Coments', methods=['GET'])
def getComents():
    try:
        coments = Coments.query.all()
        toReturn = [coments.serialize() for coments in coments]
        return jsonify(toReturn), 200

    except Exception:
        return jsonify({"msg": "Ha ocurrido un error"}) , 500
    

# this only runs if `$ python src/main.py` is executed

@app.route('/Coments/<int:idFilm>', methods=['GET'])
def getComentFilm(idFilm):
    try:
       
        filmId =  Coments.query.filter_by(idFilm=idFilm).all()
        return jsonify(filmId.serialize()), 200

    except Exception:
        return jsonify({"msg": "Ha ocurrido un error"}) , 500
    


if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)







def get_users():

    try:
        
        # Obtener usuarios de la base de datos
        query = db.select(User).order_by(User.id)
        users = db.session.execute(query).scalars()

        user_list = [user.serialize() for user in users]

        return {"code": 200, "msg": "Usuarios existentes obtenidos", "users": user_list}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}




def get_Token():

    try:

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]
        
        # Obtener usuarios de la base de datos
        query = db.select(User).order_by(User.id)
        users = db.session.execute(query).scalars()

        users_carers_list = [user.serialize() for user in users if len(user.tariffs) != 0 ]

        users_carers_list_without_me = [user for user in users_carers_list if user["id"] != user_id ]

        return {"code": 200, "msg": "Usuarios existentes obtenidos", "users_carers": users_carers_list_without_me}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}




def get_user(id):

    try:
    
        user = db.get_or_404(User, id)
       
        
        return {"code": 200, "msg": "Usuario requerido obtenido", "user": user.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_me_user():

    try:

        sub_token = get_jwt_identity()
        user_id = sub_token["id"]
    
        # Obtener usuario de la base de datos
        user = db.get_or_404(User, user_id)

        access_token = create_access_token(identity=user.serialize())
        
        return {"code": 200, "msg": "¡Usuario actualizado correctamente!", "user": user.serialize(), "token": access_token}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def update_user(body, id):

    try:
    
        # Obtener usuario de la base de datos
        user = db.get_or_404(User, id)

        claves_user = body.keys()

        if "password" in claves_user:
            user.password = body["password"]

        if "userPhoto" in claves_user:
            user.userPhoto = body["userPhoto"]
 
        # user.email = body["email"]        # ESTA DISABLED PARA CAMBIAR EN EL FRONT
        user.name = body["name"]
        user.lastName = body["lastName"]
        user.address = body["address"]
        user.province = body["province"]
        user.postalCode = int(body["postalCode"])
        user.phone = int(body["phone"])
        user.country = body["country"]
        user.birthdate = body["birthdate"]
        user.aboutMe = body.get("aboutMe", None)
        user.is_active = True

     

        db.session.commit()

        return {"code": 200, "msg": "¡Datos del usuario actualizados correctamente!", "user": user.serialize()}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


def delete_user(id):

    try:
    
        # Obtener usuarios de la base de datos
        user = db.get_or_404(User, id)

        db.session.delete(user)
        db.session.commit()

        # query = db.select(User).order_by(User.id)                 # SI DESPUES NECESITA UNA LISTA COMPLETA ACTUALIZADA
        # users = db.session.execute(query).scalars()


        return {"code": 200, "msg": "¡Usuario eliminado correctamente!"}

    except Exception as error:
        print(error)
        return {"code": 500, "msg": "¡Error en el servidor, algo fue mal!"}


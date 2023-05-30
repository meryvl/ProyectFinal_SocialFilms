from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname":self.lastname,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Coments(db.Model):
    __tablename__ = 'Coments'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500), unique=True, nullable=False)
    idFilm =db.Column(db.String(100), unique=True, nullable=False)
    idUsuario = db.Column(db.Integer, db.ForeignKey('user.id'))
    usuario = db.relationship(User)


    def __repr__(self):
        return f'<Comments {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "idUsuario": self.idUsuario,
            "text": self.text,
            "idFilm":self.idFilm,
            "usuario":self.usuario.serialize()
            # do not serialize the password, its a security breach
        }


class ListsSee(db.Model):
    __tablename__ = 'listSee'
    id = db.Column(db.Integer, primary_key=True)
    idFilm =db.Column(db.String(100), unique=True, nullable=False)
    nameFilm =db.Column(db.String(200), unique=True, nullable=False)
    urlApi = db.Column(db.String(200), unique=True, nullable=False)
    idUsuario = db.Column(db.Integer,db.ForeignKey('user.id'))
    usuario = db.relationship(User)


    def __repr__(self):
        return f'<ListsSee {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "idFilm": self.idFilm,
            "NameFilm":self.nameFilm,
            "url": self.urlApi,
            "idUsuario": self.idUsuario,
            "usuario":self.usuario.serialize()
            # do not serialize the password, its a security breach
        }


class ListsCompletados(db.Model):
    __tablename__ = 'listCompletadas'
    id = db.Column(db.Integer, primary_key=True)
    idFilm =db.Column(db.String(100), unique=True, nullable=False)
    nameFilm =db.Column(db.String(200), unique=True, nullable=False)
    urlApi = db.Column(db.String(200), unique=True, nullable=False)
    idUsuario = db.Column(db.Integer,db.ForeignKey('user.id'))
    usuario = db.relationship(User)


    def __repr__(self):
        return f'<ListsCompletados {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "idFilm": self.idFilm,
            "NameFilm":self.nameFilm,
            "url": self.urlApi,
            "idUsuario": self.idUsuario,
            "usuario":self.usuario.serialize()
            # do not serialize the password, its a security breach
        }



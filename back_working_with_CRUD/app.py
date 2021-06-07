from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate


from models.estadistica import Estadisticas, db 
#from models.usuarios import Usuarios
#from models.tipos_transportes import Tipos_Transportes


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///estadistica.s3db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy()
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

@app.route('/resumen',  methods = ['GET'])
def get_resumen():
    estadisticas = [item.serialize() for item in Estadisticas.query.all()]
    return jsonify(estadisticas), 200

@app.route('/agregar',  methods = ['POST'])
def post_datos():
    estadisticas = Estadisticas()
    print('data', request.json)
    estadisticas.operador = request.json.get('operador')
    estadisticas.fecha = request.json.get('fecha')
    estadisticas.grupo = request.json.get('grupo')
    estadisticas.kilometraje = request.json.get('kilometraje')
    estadisticas.total = request.json.get('total')
    estadisticas.estado =  request.json.get('estado')

    db.session.add(estadisticas)
    db.session.commit()

    return jsonify(estadisticas.serialize()), 201

if __name__ == '__main__':
    app.run()
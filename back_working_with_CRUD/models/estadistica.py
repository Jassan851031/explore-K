from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Estadisticas(db.Model):
    __tablename__ = 'estadisticas'
    __table_args__ = { 'extend_existing': True }

    id = db.Column(db.Integer, primary_key=True)
    operador = db.Column(db.String(100), nullable=False)
    fecha = db.Column(db.String(20), nullable=False)
    grupo = db.Column(db.String(100), nullable=False)
    kilometraje = db.Column(db.Integer, nullable=False)
    total = db.Column(db.Float, nullable=False)
    estado = db.Column(db.String(20), nullable=False)

    def serialize(self):
        return {
            'operador': self.operador,
            'fecha': self.fecha,
            'grupo': self.grupo,
            'kilometraje': self.kilometraje,
            'total': self.total,
            'estado': self.estado
        }

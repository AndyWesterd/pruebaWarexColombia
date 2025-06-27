const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  num_documento: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  tipo_documento: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  primer_nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  segundo_nombre: DataTypes.STRING(50),
  primer_apellido: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  segundo_apellido: DataTypes.STRING(50),
  sexo: {
    type: DataTypes.STRING(1),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  cod_pais_residencia: {
    type: DataTypes.STRING(3),
    defaultValue: '170'
  },
  cod_municipio_residencia: {
    type: DataTypes.STRING(5),
    allowNull: false
  },
  cod_zona_residencia: {
    type: DataTypes.STRING(1),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

module.exports = Usuario;
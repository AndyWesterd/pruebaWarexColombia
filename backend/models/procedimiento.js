const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Procedimiento = sequelize.define('Procedimiento', {
  cod_procedimiento: {
    type: DataTypes.STRING(8),
    allowNull: false
  },
  fecha_atencion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora_atencion: {
    type: DataTypes.STRING(5),
    defaultValue: '00:00'
  },
  valor: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  cod_servicio: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  cod_diagnostico: {
    type: DataTypes.STRING(4),
    allowNull: false
  },
  cod_complicacion: DataTypes.STRING(4),
  num_autorizacion: DataTypes.STRING(15),
  concepto_recaudo: DataTypes.STRING(2),
  valor_pago_moderador: {
    type: DataTypes.DECIMAL(12, 2),
    defaultValue: 0
  },
  num_factura: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  num_documento: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  tableName: 'procedimientos',
  timestamps: false
});

module.exports = Procedimiento;
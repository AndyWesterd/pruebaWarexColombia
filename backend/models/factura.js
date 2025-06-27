const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Factura = sequelize.define('Factura', {
  num_factura: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  fecha_expedicion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_final: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  num_documento_obligado: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  cod_entidad: {
    type: DataTypes.STRING(6),
    allowNull: false
  },
  valor_total: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(10),
    defaultValue: 'PENDIENTE'
  }
}, {
  tableName: 'facturas',
  timestamps: false
});

module.exports = Factura;
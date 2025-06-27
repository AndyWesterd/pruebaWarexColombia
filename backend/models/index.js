const sequelize = require('../config/db');
const Usuario = require('./usuario');
const Factura = require('./factura');
const Procedimiento = require('./procedimiento');

// Definir relaciones
Usuario.hasMany(Procedimiento, {
  foreignKey: 'num_documento',
  sourceKey: 'num_documento'
});

Factura.hasMany(Procedimiento, {
  foreignKey: 'num_factura',
  sourceKey: 'num_factura'
});

Procedimiento.belongsTo(Usuario, {
  foreignKey: 'num_documento',
  targetKey: 'num_documento'
});

Procedimiento.belongsTo(Factura, {
  foreignKey: 'num_factura',
  targetKey: 'num_factura'
});

module.exports = {
  sequelize,
  Usuario,
  Factura,
  Procedimiento
};
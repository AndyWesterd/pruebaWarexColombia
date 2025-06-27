require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const ripsRoutes = require('./routes/ripsRoutes');
const initializeData = require('./seeders/initialData');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Middleware básico
app.use(express.json());

// Conexión y sincronización con la base de datos
sequelize.authenticate()
  .then(async () => {
    console.log('✔ PostgreSQL conectado');
    
    // Sincronizar modelos (crear tablas si no existen)
    await sequelize.sync({ force: true });
    console.log('✔ Modelos sincronizados');
    
    // Insertar datos de prueba si está activado
    if (process.env.INSERT_TEST_DATA === 'true') {
      console.log('🌱 Insertando datos de prueba...');
      await initializeData();
    }
    
    // Configurar rutas
    app.use('/api', ripsRoutes);
    
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor RIPS en http://localhost:${PORT}`);
      console.log(`🔧 Modo: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📊 Datos prueba: ${process.env.INSERT_TEST_DATA === 'true' ? 'ACTIVADO' : 'DESACTIVADO'}`);
    });
  })
  .catch(err => {
    console.error('❌ Error de conexión:', err);
    process.exit(1);
  });

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error('⚠️ Error:', err.stack);
  res.status(500).send('Algo salió mal!');
});

module.exports = app;
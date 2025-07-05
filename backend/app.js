const express = require('express');
const app = express();
const cors = require('cors'); // Importa cors
const sequelize = require('./db');

// Middlewares
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());

// Importar rutas
const userRoutes = require('./routes/users');
app.use('/api/usuarios', userRoutes);

// Probar conexión a BD
sequelize.authenticate()
  .then(() => console.log('Conexión a PostgreSQL OK'))
  .catch(err => console.error('Error conexión:', err));

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});

/* Prueba conexión a la base de datos 
sequelize.authenticate()
  .then(() => console.log('Conexión a PostgreSQL OK'))
  .catch(err => console.error('Error conexión:', err)); */

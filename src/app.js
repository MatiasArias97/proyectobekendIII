import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

dotenv.config();  // ← carga las variables del .env

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB 
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('🚀 Conectado a MongoDB Atlas'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Levanta servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

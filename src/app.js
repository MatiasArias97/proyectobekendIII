import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carga variables de entorno según el entorno actual
const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
dotenv.config({ path: envFile });

import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionRouter from './routes/adoption.router.js';
import swaggerUi from "swagger-ui-express"
import { swaggerSpecs } from './config/swagger.js';

const app = express();

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
app.use('/api/adoptions', adoptionRouter);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Exporta app sin levantar el servidor (para testing)
export default app;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensors.routes');
const readingRoutes = require('./routes/readings.routes');
const app = express();
const port = 3000;
// Conectar a la base de datos
connectDB();
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Rutas
app.use('/sensors', sensorRoutes);
app.use('/readings', readingRoutes);
// Ruta de prueba
app.get('/test', (req, res) => res.json({ msg: 'El API REST funciona!' }));
// Iniciar servidor
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
const mongoose = require('mongoose');
const SensorSchema = new mongoose.Schema({
    name: String,
    type: String,
    location: String,
    createdAt: { type: Date, default: Date.now }
});
// Exportamos el modelo, el nombre debe estar en singular
module.exports = mongoose.model('Sensor', SensorSchema);
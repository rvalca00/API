const mongoose = require('mongoose');
const ReadingSchema = new mongoose.Schema({
    sensorId: String,
    value: Number,
    unit: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reading', ReadingSchema);

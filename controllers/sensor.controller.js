const Sensor = require('../models/sensor');
const getAllSensors = async (req, res) => {
    try {
        const sensors = await Sensor.find();
        res.status(200).json(sensors);
    } catch (err) {
        res.status(500).json({ msg: 'Error al obtener los sensores', error: err });
    }
};

const createSensor = async (req, res) => {
    try {
        const sensor = new Sensor(req.body);
        await sensor.save();
        res.status(201).json({ msg: 'Sensor guardado correctamente', sensor });
    } catch (err) {
        res.status(500).json({ msg: 'Error al guardar el sensor', error: err });
    }
};

const getSensorById = async (req, res) => {
    try {
        const sensor = await Sensor.findById(req.params.id);
        if (!sensor) return res.status(404).json({ msg: 'Sensor no encontrado' });
        res.status(200).json(sensor);
    } catch (err) {
        res.status(500).json({ msg: 'Error al obtener el sensor', error: err });
    }
};

const updateSensor = async (req, res) => {
    try {
        const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!sensor) return res.status(404).json({ msg: 'Sensor no encontrado' });
        res.json({ msg: 'Sensor actualizado correctamente', sensor });
    } catch (err) {
        res.status(500).json({ msg: 'Error al actualizar el sensor', error: err });
    }
};

const deleteSensor = async (req, res) => {
    try {
        const sensor = await Sensor.findByIdAndDelete(req.params.id);
        if (!sensor) return res.status(404).json({ msg: 'Sensor no encontrado' });
        res.json({ msg: 'Sensor eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ msg: 'Error al eliminar el sensor', error: err });
    }
};

module.exports = {
    getAllSensors, createSensor,
    getSensorById, updateSensor, deleteSensor
};
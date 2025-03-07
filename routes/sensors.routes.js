const express = require('express');
const { getAllSensors, createSensor, getSensorById, updateSensor, deleteSensor } =
require('../controllers/sensor.controller');

const router = express.Router();

router.get('/', getAllSensors);
router.post('/', createSensor);
router.get('/:id', getSensorById);
router.put('/:id', updateSensor);
router.delete('/:id', deleteSensor);

module.exports = router;

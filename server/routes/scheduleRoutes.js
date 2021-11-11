// ----- PACKAGES & IMPORTS ----- \\

const express = require('express');
const router = express.Router();

const { getSchedule, editSchedule, deleteSchedule } = require('../controllers/scheduleControllers.js');

// ----- ROUTES ----- \\

router.get('/', getSchedule);
router.put('/', editSchedule);
router.delete('/', deleteSchedule);

// ----- EXPORT ----- \\

module.exports = router;
// ----- PACKAGES & IMPORTS ----- \\

const express = require('express');
const router = express.Router();

const { getSchedule } = require('../controllers/scheduleControllers.js');

// ----- ROUTES ----- \\

router.get('/', getSchedule);

// ----- EXPORT ----- \\

module.exports = router;
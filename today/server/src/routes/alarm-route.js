const express = require('express');
const router = express.Router();
const AlarmController = require('../controllers/alarm/alarm-controller');

router.get('/', AlarmController.findAlarms);
router.put('/check', AlarmController.checkAlarm);

module.exports = router;
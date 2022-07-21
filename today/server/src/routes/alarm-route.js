const express = require('express');
const router = express.Router();
const AlarmController = require('../controllers/alarm/alarm-controller');

router.get('/', AlarmController.findAlarms);
router.get('/check', AlarmController.checkAlarmExist);
router.put('/check', AlarmController.checkAlarm);

module.exports = router;
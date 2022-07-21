const AlarmService = require('../../services/alarm/alarm-service');
const HttpStatus = require('http-status');

exports.findAlarms = async (req, res, next) => {
  
  const results = await AlarmService.findAlarms(JSON.parse(req.query.findInfo));

  console.log(results);
  res.send(results);
};

exports.checkAlarm = async (req, res, next) => {

  const result = await AlarmService.checkAlarm(req.body);
};
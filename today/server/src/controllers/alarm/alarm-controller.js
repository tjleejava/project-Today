const AlarmService = require('../../services/alarm/alarm-service');
const HttpStatus = require('http-status');
const { RESET_CONTENT } = require('http-status');

exports.findAlarms = async (req, res, next) => {
  
  const results = await AlarmService.findAlarms(JSON.parse(req.query.findInfo));

  console.log(results);
  res.send(results);
};

exports.checkAlarm = async (req, res, next) => {

  const result = await AlarmService.checkAlarm(req.body);

  res.send(result);
};

exports.checkAlarmExist = async (req, res, next) => {

  const result = await AlarmService.checkAlarmExist(JSON.parse(req.query.memberNo));

  res.send(result);
};
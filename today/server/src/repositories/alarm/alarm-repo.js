const AlarmQuery = require('../../database/alarm/alarm-query');
const AlarmDTO = require('../../dto/alarm/alarm-dto');
exports.selectAlarmsByStatus = (connection, {memberNo, pageInfo, checkYn}) => {

  const {page, pageItemCount} = pageInfo;
  const startRow = pageItemCount * (page - 1);
  return new Promise((resolve, reject) => {

    connection.query(AlarmQuery.selectAlarmsByStatus(), [memberNo, checkYn, startRow, pageItemCount], (err, results, fields) => {
      if(err) {
        reject(err);
      }
      const alarms = [];

      for(let i = 0; i < results.length; i++) {
        alarms.push(new AlarmDTO(results[i]));
      }

      resolve(alarms);
    });
  });
};

exports.selectAlarmCount = (connection, {memberNo, checkYn}) => {

  return new Promise((resolve, reject) => {
    
    connection.query(AlarmQuery.selectAlarmCount(), [memberNo, checkYn], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};

exports.modifyAlarmReadState = (connection, alarmNo) => {

  return new Promise((resolve, reject) => {

    connection.query(AlarmQuery.modifyAlarmReadState(), [alarmNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectAlarmExixt = (connection, memberNo) => {
  
  return new Promise((resolve, reject) => {

    connection.query(AlarmQuery.selectAlarmExixt(), [memberNo], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};
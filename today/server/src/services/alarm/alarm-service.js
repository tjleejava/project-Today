const getConnection = require('../../database/connection');
const AlarmRepo = require('../../repositories/alarm/alarm-repo');


exports.findAlarms = ({memberNo, readPageInfo, unreadPageInfo}) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();
    //페이지 정보 조회 
    //확인 목록, 미확인목록별 count 조회
    const readCount   = await AlarmRepo.selectAlarmCount(connection, {memberNo: memberNo, checkYn: 'Y'});
    const unreadCount = await AlarmRepo.selectAlarmCount(connection, {memberNo: memberNo, checkYn: 'N'});

    // 확인목록 조회
    //미확인 목록 조회
    const readResults   = await AlarmRepo.selectAlarmsByStatus(connection, {memberNo: memberNo, pageInfo: readPageInfo  , checkYn: 'Y'});
    const unreadResults = await AlarmRepo.selectAlarmsByStatus(connection, {memberNo: memberNo, pageInfo: unreadPageInfo, checkYn: 'N'});

    //조회 정보 반환
    connection.end();
    
    resolve({
      readCount: readCount,
      unreadCount: unreadCount,
      readAlarms: readResults,
      unreadAlarms: unreadResults
    });
  });
};

exports.checkAlarm = ({alarmNo}) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const result = await AlarmRepo.modifyAlarmReadState(connection, alarmNo);
    connection.end();

    resolve(result);
  });
}

exports.checkAlarmExist = (memberNo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await AlarmRepo.selectAlarmExixt(connection, memberNo);
    
    connection.end();

    resolve({count : result});
  });
}
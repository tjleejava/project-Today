const getConnection = require('../../database/connection');
const InviteRepo = require('../../repositories/invite/invite-repo');

exports.registInvite = (registInfo) => {

  return new Promise(async (resolve, reject) => {

    const connection = getConnection();
    let inviteResult = null;
    let alarmResult = null;
    const checkResult = await InviteRepo.selectInviteByMemberNo(connection, registInfo);
    
    console.log(checkResult);
    if(checkResult == 0) {
      //초대 내역에 추가
       inviteResult = await InviteRepo.insertInvite(connection, registInfo);

      //알림 내역에 추가
      alarmResult = await InviteRepo.insertAlarm(connection, registInfo);
    }
    connection.end();

    resolve({checkResult: checkResult, inviteResult: inviteResult, alarmResult: alarmResult});
  });
}
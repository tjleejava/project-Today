const getConnection = require('../../database/connection');
const InviteRepo = require('../../repositories/invite/invite-repo');

exports.findInvites = (findInfo) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const countResult = await InviteRepo.selectInvitesCount(connection, findInfo);
    const results = await InviteRepo.selectInvites(connection, findInfo);
    
    connection.end();

    resolve({count: countResult, invites: results});
  });
};

exports.registInvite = (registInfo) => {

  return new Promise(async (resolve, reject) => {

    const connection = getConnection();
    let inviteResult = null;
    let alarmResult = null;
    const checkResult = await InviteRepo.selectInviteByMemberNo(connection, registInfo);
    
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

exports.removeInvite = (inviteNo) => {
  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InviteRepo.deleteInvite(connection, inviteNo);
    
    connection.end();

    resolve(result);
  });
};
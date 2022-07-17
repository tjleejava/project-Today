const InviteQuery = require('../../database/invite/invite-query');

exports.selectInviteByMemberNo = (connection, registInfo) => {

  const { memberNo, challengeInfo } = registInfo;

  return new Promise((resolve, reject) => {
    connection.query(InviteQuery.selectInviteByMemberNo(), [memberNo, challengeInfo.challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(result[0].count);
    });
  });
};

exports.insertInvite = (connection, registInfo) => {

  const { memberNo, challengeInfo, founderNo } = registInfo;
  return new Promise((resolve, reject) => {

    connection.query(InviteQuery.insertInvite(), [challengeInfo.memberNo, memberNo, challengeInfo.challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }


      resolve(result);
    });
  });
};

exports.insertAlarm = (connection, registInfo) => {
  const {challengeInfo, memberNo, date} = registInfo;

  const content = '[' + challengeInfo.challengeName + ']챌린지에 초대받았습니다.';

  return new Promise((resolve, reject) => {
    
    connection.query(InviteQuery.insertAlarm(), [5, memberNo,content, date], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
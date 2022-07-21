const InviteQuery = require('../../database/invite/invite-query');
const InviteDTO = require('../../dto/invite/invite-dto');

exports.selectInvitesCount = (connection, {memberNo}) => {

  
  return new Promise((resolve, reject) => {
    connection.query(InviteQuery.selectInvitesCount(), [memberNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
  
      resolve(result[0].count ? result[0].count : 0);
    });
  });
};

exports.selectInvites = (connection, {memberNo, pageInfo}) => {

  const {page, pageItemCount} = pageInfo;
  const startRow = pageItemCount * (page - 1);

  return new Promise((resolve, reject) => {

    connection.query(InviteQuery.selectInvites(), [memberNo, startRow, pageItemCount], (err, results, fields) =>{
      if(err) {
        reject(err);
      }

      let invites = [];

      for(let i = 0; i < results.length; i++) {
        invites.push(new InviteDTO(results[i]));
      }

      resolve(invites);
    });
  });
};

exports.selectInviteByMemberNo = (connection, registInfo) => {

  const { memberNo, challengeInfo } = registInfo;

  return new Promise((resolve, reject) => {
    connection.query(InviteQuery.selectInviteByMemberNo(), [memberNo, challengeInfo.challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      console.log(result);
      resolve(result[0].count);
    });
  });
};

exports.insertInvite = (connection, registInfo) => {

  const { memberNo, challengeInfo, founderNo, date } = registInfo;
  return new Promise((resolve, reject) => {

    connection.query(InviteQuery.insertInvite(), [challengeInfo.memberNo, memberNo, challengeInfo.challengeNo, date], (err, result, fields) => {
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

exports.deleteInvite = (connection, inviteNo) => {

  return new Promise((resolve, reject) => {

    connection.query(InviteQuery.deleteInvite(), [inviteNo], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
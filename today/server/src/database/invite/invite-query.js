exports.selectInvitesCount = () => {

  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE_INVITE
       WHERE MEMBER_NO = ?
         AND DELETE_YN = 'N'
       ORDER BY INVITE_NO DESC
  `;
};

exports.selectInvites = () => {

  return `
      SELECT
             A.INVITE_NO
           , A.FOUNDER_NO
           , A.MEMBER_NO
           , A.CHALLENGE_NO
           , A.DELETE_YN
           , A.DATE
           , B.CHALLENGE_NAME
           , C.NICKNAME
        FROM TBL_CHALLENGE_INVITE A
        JOIN TBL_CHALLENGE B ON (A.CHALLENGE_NO = B.CHALLENGE_NO)
        JOIN TBL_MEMBER C ON (B.MEMBER_NO = C.MEMBER_NO)
       WHERE A.MEMBER_NO = ?
         AND A.DELETE_YN = 'N'
       ORDER BY A.INVITE_NO DESC
       LIMIT ?,?
  `;
};

exports.selectInviteByMemberNo = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE_INVITE
       WHERE MEMBER_NO = ?
         AND CHALLENGE_NO = ?
  `;
};

exports.insertInvite = () => {
  return`
      INSERT 
        INTO TBL_CHALLENGE_INVITE 
      (
        FOUNDER_NO
      , MEMBER_NO
      , CHALLENGE_NO
      , DATE
      ) 
      VALUES
      (?, ?, ?, ?)
  `;
};

exports.insertAlarm = () => {
  return `
      INSERT 
        INTO TBL_ALARM 
      (
        ALARM_CATEGORY_NO
      , MEMBER_NO
      , ALARM_CONTENT
      , ALARM_DATE
      , CHECK_YN
      ) 
      VALUES(?, ?, ?, ?, 'N')
  `;
};

exports.deleteInvite = () => {

  return `
      UPDATE
             TBL_CHALLENGE_INVITE
         SET DELETE_YN = 'Y'
       WHERE INVITE_NO = ?    
  `;
};
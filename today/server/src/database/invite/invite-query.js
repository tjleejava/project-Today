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
      ) 
      VALUES
      (?, ?, ?)
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
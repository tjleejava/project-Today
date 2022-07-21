exports.selectAlarmsByStatus = () => {

  return `
      SELECT
             A.ALARM_NO
           , A.ALARM_CATEGORY_NO
           , B.ALARM_CATEGORY_NAME
           , A.MEMBER_NO
           , A.ALARM_CONTENT
           , A.ALARM_DATE
           , A.CHECK_YN
        FROM TBL_ALARM A
        JOIN TBL_ALARM_CATEGORY B ON (A.ALARM_CATEGORY_NO = B.ALARM_CATEGORY_NO)
       WHERE A.MEMBER_NO = ?
         AND A.CHECK_YN = ?
       ORDER BY A.ALARM_NO DESC
       LIMIT ?, ?
  `;
};

exports.selectAlarmCount = () => {

  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_ALARM
       WHERE MEMBER_NO = ?
         AND CHECK_YN = ?
  `;
}

exports.modifyAlarmReadState = () => {

  return `
      UPDATE
             TBL_ALARM
         SET CHECK_YN = 'Y'
       WHERE ALARM_NO = ?
  `;
};

exports.selectAlarmExixt = () => {
  return `
      SELECT 
             COUNT(*) AS count
        FROM TBL_ALARM
       WHERE MEMBER_NO = ?
         AND CHECK_YN = 'N'
  `;
};
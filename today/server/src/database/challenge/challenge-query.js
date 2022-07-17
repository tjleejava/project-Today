exports.selectAttachmentByChallengeNo = () => {
  return `
      SELECT 
             FILE_NO
           , FILE_TYPE_NO
           , ORIGINAL_NAME
           , SAVED_NAME
           , SAVED_PATH
           , CHALLENGE_NO 
        FROM TBL_CHALLENGE_ATTACHMENT
       WHERE CHALLENGE_NO = ?
  `;
};
exports.selectAuthDayByChallengeNo = () => {

  return `
      SELECT 
             FREQUENCY_NO
           , CHALLENGE_NO
           , DAY_NO 
        FROM TBL_CHALLENGE_AUTH_FREQUENCY
       WHERE CHALLENGE_NO = ?
  `;
};
exports.selectChallengeByNo = () => {
  return `
      SELECT
             A.CHALLENGE_NO
           , A.CHALLENGE_NAME
           , A.CHALLENGE_START_DATE
           , A.CHALLENGE_TERM
           , A.CHALLENGE_SCOPE
           , A.CHALLENGE_CATEGORY_NO
           , A.MEMBER_NO
           , A.CHALLENGE_MAX_AMOUNT
           , A.CHALLENGE_STATUS_NO
           , A.CHALLENGE_AUTH_EXPLAN
           , A.CHALLENGE_INFO
           , A.CHALLENGE_FREQUENCY
           , A.CHALLENGE_START_TIME
           , A.CHALLENGE_END_TIME
           , B.NICKNAME
           , C.CHALLENGE_CATEGORY_NAME
           , D.CHALLENGE_STATUS_NAME
      FROM TBL_CHALLENGE A
      JOIN TBL_MEMBER B ON (A.MEMBER_NO = B.MEMBER_NO) 
      JOIN TBL_CHALLENGE_CATEGORY C ON (A.CHALLENGE_CATEGORY_NO = C.CHALLENGE_CATEGORY_NO)
      JOIN TBL_CHALLENGE_STATUS D ON (A.CHALLENGE_STATUS_NO = D.CHALLENGE_STATUS_NO)
     WHERE A.CHALLENGE_NO = ?
  `;
}

exports.selectParticipationByMemberNo = () => {

  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_PARTICIPATION 
       WHERE MEMBER_NO = ?
         AND CHALLENGE_NO = ?
  `;
};

exports.selectParticipationCount = () => {

  return `
      SELECT 
             A.MEMBER_NO
           , CHALLENGE_NO
           , COUNT(A.MEMBER_NO) AS count
        FROM TBL_PARTICIPATION A
       WHERE CHALLENGE_NO = ?
       GROUP BY MEMBER_NO
  `;
};

exports.insertChallenge = () => {

  return `
      INSERT 
        INTO TBL_CHALLENGE 
      (     
        CHALLENGE_NAME, CHALLENGE_START_DATE, CHALLENGE_TERM
      , CHALLENGE_SCOPE, CHALLENGE_CATEGORY_NO, MEMBER_NO
      , CHALLENGE_MAX_AMOUNT, CHALLENGE_STATUS_NO, CHALLENGE_AUTH_EXPLAN
      , CHALLENGE_INFO, CHALLENGE_FREQUENCY, CHALLENGE_START_TIME, CHALLENGE_END_TIME
      )      
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
};

exports.insertChallengeAttachment = () => {
  return `
      INSERT 
        INTO TBL_CHALLENGE_ATTACHMENT 
      (
        FILE_TYPE_NO, ORIGINAL_NAME, SAVED_NAME
      , SAVED_PATH, CHALLENGE_NO
      ) 
      VALUES
      (?, ?, ?, ?, ?)
  `;
};

exports.insertChallengeFreqDay = () => {
  return `
      INSERT 
        INTO TBL_CHALLENGE_AUTH_FREQUENCY 
      (
        DAY_NO, CHALLENGE_NO
      ) 
      VALUES
      (?, ?)
  `;
};

exports.selectRankings = () => {
  return`
      SELECT 
             A.CHALLENGE_NO
           , A.CHALLENGE_START_DATE
           , A.CHALLENGE_NAME
           , B.CHALLENGE_CATEGORY_NAME 
           , C.SAVED_PATH 
           , C.SAVED_NAME 
        FROM TBL_CHALLENGE A 
        JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
        JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
       WHERE CHALLENGE_STATUS_NO = 2
         AND A.CHALLENGE_SCOPE = 'public'
         AND C.FILE_TYPE_NO = 2
       ORDER BY A.CHALLENGE_NO DESC
       LIMIT 0,4
  `;
};

exports.selectByCategoryNo = () => {
  return`
      SELECT 
             A.CHALLENGE_NO
           , A.CHALLENGE_START_DATE
           , A.CHALLENGE_NAME
           , B.CHALLENGE_CATEGORY_NAME 
           , C.SAVED_PATH 
           , C.SAVED_NAME 
        FROM TBL_CHALLENGE A 
        JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
        JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
       WHERE CHALLENGE_STATUS_NO = 2
         AND A.CHALLENGE_SCOPE = 'public'
         AND C.FILE_TYPE_NO = 2
         AND A.CHALLENGE_CATEGORY_NO = ?
       ORDER BY A.CHALLENGE_NO DESC
       LIMIT 0,3
  `;
};
exports.selectChallengeByNo = () => {
  return `
      SELECT
      CHALLENGE_NO, 
      CHALLENGE_NAME, CHALLENGE_START_DATE, CHALLENGE_TERM
      , CHALLENGE_SCOPE, CHALLENGE_CATEGORY_NO, MEMBER_NO
      , CHALLENGE_MAX_AMOUNT, CHALLENGE_STATUS_NO, CHALLENGE_AUTH_EXPLAN
      , CHALLENGE_INFO
      FROM TBL_CHALLENGE
      WHERE CHALLENGE_NO = ?
  `;
}

exports.insertChallenge = () => {

  return `
      INSERT 
        INTO TBL_CHALLENGE 
      (     
        CHALLENGE_NAME, CHALLENGE_START_DATE, CHALLENGE_TERM
      , CHALLENGE_SCOPE, CHALLENGE_CATEGORY_NO, MEMBER_NO
      , CHALLENGE_MAX_AMOUNT, CHALLENGE_STATUS_NO, CHALLENGE_AUTH_EXPLAN
      , CHALLENGE_INFO
      )      
      VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
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
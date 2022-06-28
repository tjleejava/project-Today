exports.selectAllMenus = () => {

  return `
      SELECT
             A.MENU_CODE
           , A.MENU_NAME
           , A.MENU_PRICE
           , A.CATEGORY_CODE
           , A.ORDERABLE_STATUS
        FROM TBL_MENU A
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
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
         AND PARTICIPATION_STATUS_NO = 1
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

exports.insertParticipation = () => {
  return `
  INSERT 
    INTO TBL_PARTICIPATION 
  (
    MEMBER_NO
  , CHALLENGE_NO
  , PARTICIPATION_DATE
  , PARTICIPATION_STATUS_NO
  ) 
  VALUES(?, ?, ?, 1)
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
       WHERE CHALLENGE_STATUS_NO IN (1, 2)
         AND A.CHALLENGE_SCOPE = 'public'
         AND C.FILE_TYPE_NO = 2
         AND A.CHALLENGE_CATEGORY_NO = ?
       ORDER BY A.CHALLENGE_NO DESC
       LIMIT 0,3
  `;
};

exports.selectAllChallengeCount = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE 
       WHERE CHALLENGE_STATUS_NO IN (1, 2)
         AND CHALLENGE_SCOPE = 'public'
  `;
};

exports.selectAllChallenge = () => {
  return `
  SELECT 
         A.CHALLENGE_NO
       , A.CHALLENGE_START_DATE
       , A.CHALLENGE_NAME
       , A.CHALLENGE_MAX_AMOUNT
       , B.CHALLENGE_CATEGORY_NAME 
       , C.SAVED_PATH 
       , C.SAVED_NAME 
       , D.CHALLENGE_STATUS_NAME
       , (SELECT COUNT(*) 
            FROM TBL_PARTICIPATION E
           WHERE E.CHALLENGE_NO = A.CHALLENGE_NO
             AND E.PARTICIPATION_STATUS_NO = 1
         ) AS CURRENT_AMOUNT
    FROM TBL_CHALLENGE A 
    JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
    JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
    JOIN TBL_CHALLENGE_STATUS D ON (A.CHALLENGE_STATUS_NO = D.CHALLENGE_STATUS_NO)
   WHERE A.CHALLENGE_STATUS_NO IN (1, 2)
     AND A.CHALLENGE_SCOPE = 'public'
     AND C.FILE_TYPE_NO = 2
   ORDER BY A.CHALLENGE_NO DESC
   LIMIT ?,?

  `;
};

exports.selectAllChallengeCountBySearchValue = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE
       WHERE CHALLENGE_STATUS_NO IN (1, 2)
         AND CHALLENGE_SCOPE = 'public'
         AND CHALLENGE_NAME LIKE ?
  `;
};

exports.selectAllChallengeBySearchValue = () => {
  return `
  SELECT 
         A.CHALLENGE_NO
       , A.CHALLENGE_START_DATE
       , A.CHALLENGE_NAME
       , A.CHALLENGE_MAX_AMOUNT
       , B.CHALLENGE_CATEGORY_NAME 
       , C.SAVED_PATH 
       , C.SAVED_NAME 
       , D.CHALLENGE_STATUS_NAME
    FROM TBL_CHALLENGE A 
    JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
    JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
    JOIN TBL_CHALLENGE_STATUS D ON (A.CHALLENGE_STATUS_NO = D.CHALLENGE_STATUS_NO)
   WHERE A.CHALLENGE_STATUS_NO IN (1, 2)
     AND A.CHALLENGE_SCOPE = 'public'
     AND C.FILE_TYPE_NO = 2
     AND A.CHALLENGE_NAME LIKE ?
   ORDER BY A.CHALLENGE_NO DESC
   LIMIT ?,?

  `;
};

exports.selectChallengeCount = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE
       WHERE CHALLENGE_STATUS_NO IN (1, 2)
         AND CHALLENGE_SCOPE = 'public'
         AND CHALLENGE_CATEGORY_NO = ?
  `;
};

exports.selectChallenge = () => {
  return `
  SELECT 
         A.CHALLENGE_NO
       , A.CHALLENGE_START_DATE
       , A.CHALLENGE_NAME
       , A.CHALLENGE_MAX_AMOUNT
       , B.CHALLENGE_CATEGORY_NAME 
       , C.SAVED_PATH 
       , C.SAVED_NAME 
       , D.CHALLENGE_STATUS_NAME
    FROM TBL_CHALLENGE A 
    JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
    JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
    JOIN TBL_CHALLENGE_STATUS D ON (A.CHALLENGE_STATUS_NO = D.CHALLENGE_STATUS_NO)
   WHERE A.CHALLENGE_STATUS_NO IN (1, 2)
     AND A.CHALLENGE_SCOPE = 'public'
     AND C.FILE_TYPE_NO = 2
     AND A.CHALLENGE_CATEGORY_NO = ?
   ORDER BY A.CHALLENGE_NO DESC
   LIMIT ?,?

  `;
};

exports.selectChallengeCountBySearchValue = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM TBL_CHALLENGE
       WHERE CHALLENGE_STATUS_NO IN (1, 2)
         AND CHALLENGE_SCOPE = 'public'
         AND CHALLENGE_CATEGORY_NO = ?
         AND CHALLENGE_NAME LIKE ?
  `;
};

exports.selectChallengeBySearchValue = () => {
  return `
  SELECT 
         A.CHALLENGE_NO
       , A.CHALLENGE_START_DATE
       , A.CHALLENGE_NAME
       , A.CHALLENGE_MAX_AMOUNT
       , B.CHALLENGE_CATEGORY_NAME 
       , C.SAVED_PATH 
       , C.SAVED_NAME 
       , D.CHALLENGE_STATUS_NAME
    FROM TBL_CHALLENGE A 
    JOIN TBL_CHALLENGE_CATEGORY B ON (A.CHALLENGE_CATEGORY_NO = B.CHALLENGE_CATEGORY_NO)
    JOIN TBL_CHALLENGE_ATTACHMENT C ON (A.CHALLENGE_NO = C.CHALLENGE_NO)
    JOIN TBL_CHALLENGE_STATUS D ON (A.CHALLENGE_STATUS_NO = D.CHALLENGE_STATUS_NO)
   WHERE A.CHALLENGE_STATUS_NO IN (1, 2)
     AND A.CHALLENGE_SCOPE = 'public'
     AND C.FILE_TYPE_NO = 2
     AND A.CHALLENGE_CATEGORY_NO = ?
     AND A.CHALLENGE_NAME LIKE ?
   ORDER BY A.CHALLENGE_NO DESC
   LIMIT ?,?

  `;
};

exports.insertParticipateMemberInChallenge = () => {
  return `
    INSERT
      INTO tbl_participation
    (
      MEMBER_NO
    , CHALLENGE_NO
    , PARTICIPATION_DATE
    , PARTICIPATION_STATUS_NO
    )
    VALUES
    (
      ?
    , ?
    , NOW()
    , 1
    )
  `
}

exports.findChallengeParticipation = () => {
  return `
    SELECT
           PARTICIPATION_NO
      FROM tbl_participation
     WHERE MEMBER_NO = ?
       AND CHALLENGE_NO = ?
       AND PARTICIPATION_STATUS_NO = 1
  `
}

exports.deleteChallengeByAdmin = () => {
  return `
      UPDATE
             TBL_CHALLENGE
         SET CHALLENGE_STATUS_NO = ?
       WHERE CHALLENGE_NO = ?
  `;
};

exports.selectParticipations = () => {
  return `
  SELECT
         PARTICIPATION_NO
       , MEMBER_NO
       , CHALLENGE_NO
       , PARTICIPATION_DATE
       , PARTICIPATION_STATUS_NO
    FROM TBL_PARTICIPATION
   WHERE CHALLENGE_NO = ?
  `;
};

exports.updateParticipationStatus = () => {
  return `
      UPDATE
             TBL_PARTICIPATION
         SET PARTICIPATION_STATUS_NO = ?
       WHERE PARTICIPATION_NO = ?
  `;
};

exports.insertAlarm = () => {
  return`
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

exports.modifyChallenge = () => {
  
  return `
      UPDATE 
             TBL_CHALLENGE
         SET CHALLENGE_AUTH_EXPLAN = ?
           , CHALLENGE_INFO = ?
           , CHALLENGE_START_TIME = ?
           , CHALLENGE_END_TIME = ?
       WHERE CHALLENGE_NO = ?
  `;
};

exports.updateChallengeAttachment = () => {

  return `
      UPDATE
             TBL_CHALLENGE_ATTACHMENT
         SET ORIGINAL_NAME = ?
           , SAVED_NAME = ?
           , SAVED_PATH = ?
       WHERE CHALLENGE_NO = ?
         AND FILE_TYPE_NO = ?
  `;
};

exports.selectChallengeAtachment = () => {

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
         AND FILE_TYPE_NO = ?
  `;
};


exports.insertParticipationHistory = () => {

  return `
      INSERT
        INTO TBL_PARTICIPATION_HISTORY 
      (
        PARTICIPATION_NO
      , CATEGORY_NO
      , HISTORY_DATE
      ) 
      VALUES(?, ?, ?);
  `;
};

exports.selectParticipationByMemberNoAndChallengeNo = () => {

  return `
      SELECT
             PARTICIPATION_NO
        FROM TBL_PARTICIPATION
       WHERE CHALLENGE_NO = ?
         AND MEMBER_NO = ?
       ORDER BY PARTICIPATION_NO DESC
       LIMIT 0,1
  `;
};

exports.selectParticipationNo = () => {
  return`
    SELECT
           PARTICIPATION_NO
      FROM TBL_PARTICIPATION
     WHERE CHALLENGE_NO =?
       AND MEMBER_NO = ?
  `
}

exports.insertInquiry = () => {
  return `
    INSERT
      INTO tbl_challenge_inquiry
    (
      CHALLENGE_INQUIRY_TITLE
    , CHALLENGE_INQUIRY_CONTENT
    , PARTICIPATION_NO
    , DEL_YN
    , CHALLENGE_INQUIRY_DATE
    )
    VALUES
    (
      ?
    , ?
    , ?
    , 'N'
    , NOW()
    )

  `
}

exports.selectInquiries = () => {
  return `
    SELECT
            A.CHALLENGE_INQUIRY_NO
          , A.CHALLENGE_INQUIRY_TITLE
          , A.CHALLENGE_INQUIRY_CONTENT
          , A.PARTICIPATION_NO
          , A.DEL_YN
          , A.CHALLENGE_INQUIRY_DATE
          , B.MEMBER_NO
          , B.CHALLENGE_NO
          , C.NICKNAME
      FROM tbl_challenge_inquiry A
      JOIN tbl_participation B ON (A.PARTICIPATION_NO = B.PARTICIPATION_NO)
      JOIN tbl_member C ON (B.MEMBER_NO = C.MEMBER_NO)
     WHERE DEL_YN = 'N'
       AND B.CHALLENGE_NO = ?
  `
}

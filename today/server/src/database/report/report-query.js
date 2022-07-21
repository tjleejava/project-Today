exports.selectReport = () => {
  return `
      SELECT 
             A.REPORT_NO
           , A.REPORT_CONTENT
           , A.REPORT_DATE
           , A.REPORT_STATUS
           , A.MEMBER_NO 
           , A.REPORTER_NO
           , A.CHALLENGE_NO
           , A.CATEGORY_NO 
           , B.CATEGORY_NAME
           , B.CATEGORY_TYPE
           , C.NICKNAME
           , D.CHALLENGE_NAME
           , E.REPORT_STATUS_NAME
        FROM TBL_REPORT A
        JOIN TBL_REPORT_CATEGORY B ON (A.CATEGORY_NO = B.CATEGORY_NO)
        JOIN TBL_MEMBER C ON (A.REPORTER_NO = C.MEMBER_NO)
        JOIN TBL_CHALLENGE D ON (A.CHALLENGE_NO = D.CHALLENGE_NO)
        JOIN TBL_REPORT_STATUS E ON (A.REPORT_STATUS = E.REPORT_STATUS_NO)
       WHERE A.REPORT_NO = ?
  `;
};

exports.selectReportExamine = () => {

  return `
      SELECT 
            REPORT_EXAMINE_HISTORY_NO
          , REPORT_EXAMINE_DATE
          , REPORT_NO
          , REPORT_EXAMINE_CATEGORY
          , PENALTY_DATE
          , REFUSE_REASON 
          , CHALLENGE_CANCEL_DATE
       FROM TBL_REPORT_EXAMINE_HISTORY
      WHERE REPORT_NO = ?
      ORDER BY REPORT_EXAMINE_HISTORY_NO DESC
      LIMIT 0 , 1
  `;
};

exports.selectChallengeReportAccept = () => {

  return `
      SELECT 
             A.PENALTY_DATE AS penaltyDate
           , A.CHALLENGE_CANCEL_DATE AS challengeCancelDate
        FROM TBL_REPORT_EXAMINE_HISTORY A
       WHERE A.REPORT_EXAMINE_CATEGORY = '승인'
         AND A.REPORT_NO IN (SELECT B.REPORT_NO 
                               FROM TBL_REPORT B 
                              WHERE B.CHALLENGE_NO = (SELECT A.CHALLENGE_NO
                                                        FROM TBL_REPORT A
                                                       WHERE A.REPORT_NO = ?
                                                     )
                            )
  `;
};

exports.selectChallengeReportsCount = () => {
  
  return `
      SELECT 
             COUNT(*) AS count  
        FROM TBL_REPORT
       WHERE CATEGORY_NO >= 7
  `;
};
exports.selectChallengeReport = () => {
  return `
      SELECT 
             A.REPORT_NO
           , A.REPORT_CONTENT
           , A.REPORT_DATE
           , A.REPORT_STATUS
           , A.MEMBER_NO 
           , A.REPORTER_NO
           , A.CHALLENGE_NO
           , A.CATEGORY_NO 
           , B.CATEGORY_NAME
           , C.NICKNAME
           , D.CHALLENGE_NAME
           , E.REPORT_STATUS_NAME
        FROM TBL_REPORT A
        JOIN TBL_REPORT_CATEGORY B ON (A.CATEGORY_NO = B.CATEGORY_NO)
        JOIN TBL_MEMBER C ON (A.REPORTER_NO = C.MEMBER_NO)
        JOIN TBL_CHALLENGE D ON (A.CHALLENGE_NO = D.CHALLENGE_NO)
        JOIN TBL_REPORT_STATUS E ON (A.REPORT_STATUS = E.REPORT_STATUS_NO)
       WHERE A.CATEGORY_NO >= 7
       ORDER BY REPORT_NO DESC
       LIMIT ?, ?
  `;
};

exports.selectUserReportsCount = () => {
  
  return `
      SELECT 
             COUNT(*) AS count  
        FROM TBL_REPORT
       WHERE CATEGORY_NO <= 6
  `;
};

exports.selectUserReport = () => {
  return `
      SELECT 
             A.REPORT_NO
           , A.REPORT_CONTENT
           , A.REPORT_DATE
           , A.REPORT_STATUS
           , A.MEMBER_NO 
           , A.REPORTER_NO
           , A.CHALLENGE_NO
           , A.CATEGORY_NO 
           , B.CATEGORY_NAME
           , C.NICKNAME
        FROM TBL_REPORT A
        JOIN TBL_REPORT_CATEGORY B ON (A.CATEGORY_NO = B.CATEGORY_NO)
        JOIN TBL_MEMBER C ON (A.REPORTER_NO = C.MEMBER_NO)
       WHERE A.CATEGORY_NO <= 6
       ORDER BY REPORT_NO DESC
       LIMIT ?, ?
  `;
};

exports.insertInquiry = () => {
  return `
      INSERT 
        INTO TBL_PLATFORM_INQUIRY 
      (
        PLATFORM_INQUIRY_TITLE
      , PLATFORM_INQUIRY_CONTENT
      , PLATFORM_INQUIRY_DATE
      , MEMBER_NO
      , DEL_YN
      ) 
      VALUES
      (?, ?, ?, ?, 'N')
  `;
};

exports.insertReport = () => {
  return `
      INSERT 
        INTO TBL_REPORT 
      (
        REPORT_CONTENT
      , REPORT_DATE
      , REPORT_STATUS
      , MEMBER_NO
      , REPORTER_NO
      , CHALLENGE_NO
      , CATEGORY_NO
      ) 
      VALUES
      (?, ?, 1, ?, ?, ?, ?)
  `;
};

exports.selectChallengeReportbyNo = () => {
  return `
      SELECT
             COUNT(*) AS COUNT
        FROM TBL_REPORT
       WHERE REPORTER_NO = ?
         AND CHALLENGE_NO = ?
  `;
};


exports.insertRefuse = () => {
  return `
      INSERT 
        INTO TBL_REPORT_EXAMINE_HISTORY 
      (
        REPORT_EXAMINE_DATE
      , REPORT_NO
      , REFUSE_REASON
      , REPORT_EXAMINE_CATEGORY
      ) 
      VALUES(?, ?, ?, '거절')
  `;
};

exports.updateChallengeStatus = () => {

  return `
      UPDATE
             TBL_CHALLENGE
         SET CHALLENGE_STATUS_NO = 5
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

exports.updateReportStatus = () => {

  return `
      UPDATE
             TBL_REPORT
         SET REPORT_STATUS = ?
       WHERE REPORT_NO = ?
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

exports.updatePariticipationStatus = () => {
  return `
      UPDATE
             TBL_PARTICIPATION
         SET PARTICIPATION_STATUS_NO = ?
       WHERE PARTICIPATION_NO = ?
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

exports.selectHostNo = () => {

  return`
      SELECT
             MEMBER_NO AS no
        FROM TBL_CHALLENGE
       WHERE CHALLENGE_NO = ?
  `;
};

exports.insertExamineAccept = () => {

  return `
      INSERT 
        INTO TBL_REPORT_EXAMINE_HISTORY 
      (
        REPORT_EXAMINE_DATE
      , REPORT_NO
      , REPORT_EXAMINE_CATEGORY
      , PENALTY_DATE
      , CHALLENGE_CANCEL_DATE
      ) 
      VALUES(?, ?, ?, ?, ?);  
  `;
};

exports.insertUserPenalty = () => {

  return `
      INSERT 
        INTO TBL_PENALTY 
      (
        PENALTY_DATE
      , MEMBER_NO
      , PENALTY_END_DATE
      , PENALTY_CATEGORY
      , REPORT_EXAMINE_HISTORY_NO
      ) 
      VALUES(?, ?, ?, ?, ?)
  `;
};
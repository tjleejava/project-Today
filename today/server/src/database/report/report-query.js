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
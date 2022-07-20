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

exports.selectInquiriesCount = () => {
  return `
      SELECT
             COUNT(*) AS count
        FROM  TBL_PLATFORM_INQUIRY
       WHERE MEMBER_NO = ?
  `;
};

exports.selectInquiries = () => {

  return `
      SELECT 
             A.PLATFORM_INQUIRY_NO
           , A.PLATFORM_INQUIRY_TITLE
           , A.PLATFORM_INQUIRY_CONTENT
           , A.PLATFORM_INQUIRY_DATE
           , A.MEMBER_NO
           , A.DEL_YN 
           , B.PLATFORM_INQUIRY_REPLY_NO 
        FROM TBL_PLATFORM_INQUIRY A
        LEFT JOIN TBL_PLATFORM_INQUIRY_REPLY B ON (A.PLATFORM_INQUIRY_NO = B.PLATFORM_INQUIRY_NO) 
       WHERE A.MEMBER_NO = ?
       ORDER BY A.PLATFORM_INQUIRY_NO DESC
       LIMIT ?,?
  `;
};

exports.selectInquiry = () => {

  return `
      SELECT 
             A.PLATFORM_INQUIRY_NO
           , A.PLATFORM_INQUIRY_TITLE
           , A.PLATFORM_INQUIRY_CONTENT
           , A.PLATFORM_INQUIRY_DATE
           , A.MEMBER_NO
           , A.DEL_YN 
           , B.NICKNAME
           , C.PLATFORM_INQUIRY_REPLY_NO 
        FROM TBL_PLATFORM_INQUIRY A
        JOIN TBL_MEMBER B ON (A.MEMBER_NO = B.MEMBER_NO)
        LEFT JOIN TBL_PLATFORM_INQUIRY_REPLY C ON (A.PLATFORM_INQUIRY_NO = C.PLATFORM_INQUIRY_NO) 
       WHERE A.PLATFORM_INQUIRY_NO = ?
  `;
};

exports.selectInquiryReply = () => {

  return `
      SELECT 
             A.PLATFORM_INQUIRY_REPLY_NO
           , A.ADMIN_NO
           , A.PLATFORM_INQUIRY_REPLY_CONTENT
           , A.PLATFORM_INQUIRY_REPLY_DATE
           , A.PLATFORM_INQUIRY_NO
        FROM TBL_PLATFORM_INQUIRY_REPLY A
       WHERE A.PLATFORM_INQUIRY_NO = ?
  `;
};

exports.selectAllInquiries = () => {

  return `
      SELECT 
             A.PLATFORM_INQUIRY_NO
           , A.PLATFORM_INQUIRY_TITLE
           , A.PLATFORM_INQUIRY_CONTENT
           , A.PLATFORM_INQUIRY_DATE
           , A.MEMBER_NO
           , A.DEL_YN 
           , B.NICKNAME
           , C.PLATFORM_INQUIRY_REPLY_NO 
        FROM TBL_PLATFORM_INQUIRY A
        JOIN TBL_MEMBER B ON (A.MEMBER_NO = B.MEMBER_NO)
        LEFT JOIN TBL_PLATFORM_INQUIRY_REPLY C ON (A.PLATFORM_INQUIRY_NO = C.PLATFORM_INQUIRY_NO) 
       ORDER BY A.PLATFORM_INQUIRY_NO DESC
       LIMIT ?, ?
  `;
};

exports.selectAllInquiriesCounts = () => {

  return `
      SELECT 
             COUNT(*) AS COUNT
        FROM TBL_PLATFORM_INQUIRY
  `;
};

exports.updateReply = () => {

  return `
      UPDATE 
 	           TBL_PLATFORM_INQUIRY_REPLY 
         SET PLATFORM_INQUIRY_REPLY_CONTENT = ?
       WHERE PLATFORM_INQUIRY_REPLY_NO = ?;
  `;
};

exports.insertReply = () => {
  return `
      INSERT 
        INTO TBL_PLATFORM_INQUIRY_REPLY 
      (
        ADMIN_NO
      , PLATFORM_INQUIRY_REPLY_CONTENT
      , PLATFORM_INQUIRY_REPLY_DATE
      , PLATFORM_INQUIRY_NO
      ) 
      VALUES
      (1, ?, ?, ?);
`;
};

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
        FROM TBL_PLATFORM_INQUIRY A
        JOIN TBL_MEMBER B ON (A.MEMBER_NO = B.MEMBER_NO)
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
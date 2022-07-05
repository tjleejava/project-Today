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
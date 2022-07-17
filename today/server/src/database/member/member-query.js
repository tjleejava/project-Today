exports.insertMember = () => {

  return `
    INSERT
      INTO tbl_member
    (
      MEMBER_ID
    , MEMBER_PWD
    , NICKNAME
    , ENROLL_DATE
    )
    VALUES
    (
      ?
    , ?
    , ?
    , ?
    )
  `;
}

exports.selectId = () => {
  return `
    SELECT
            MEMBER_NO
      FROM  tbl_member
     WHERE  MEMBER_ID = ?
  `;
};



exports.selectById = () => {

  return`
      SELECT 
             MEMBER_NO
           , MEMBER_ID
           , MEMBER_PWD
           , WITHDRAWAL_YN
           , NICKNAME
           , ENROLL_DATE
           , WITHDRAWAL_DATE
           , MEMBER_ROLE 
        FROM TBL_MEMBER
       WHERE MEMBER_ID = ?
  `;
};
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
          , MEMBER_ID
          , MEMBER_PWD
          , NICKNAME
          , ENROLL_DATE
          , WITHDRAWAL_DATE
          , MEMBER_ROLE
      FROM  tbl_member
     WHERE  MEMBER_ID = ?
       AND  WITHDRAWAL_YN = 'N'
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

exports.insertToken = () => {
  return `
    INSERT
      INTO tbl_token
    (
      MEMBER_NO
    , TOKEN
    )
    VALUES
    (
      ?
    , ?
    )
  `;
}

exports.resetPassword = () => {
  return `
    UPDATE tbl_member
       SET MEMBER_PWD = ?
     WHERE MEMBER_ID = ?
  `
  
}

exports.selectMemberByNo = () => {
  // return `
  //   SELECT
  // `
}


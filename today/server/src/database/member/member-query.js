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

exports.selectChallengeByMemberNo = () => {
  return `
    select A.CHALLENGE_NO
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
          , C.NICKNAME
  from tbl_challenge A
  join tbl_participation B on A.CHALLENGE_NO = B.CHALLENGE_NO
  join tbl_member C on A.MEMBER_NO = C.MEMBER_NO
  where B.MEMBER_NO = ?;
  `
}

exports.selectCompletedChallengeByMemberNo = () => {
  return `
   SELECT A.CHALLENGE_NO
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
    FROM  tbl_challenge A
    JOIN tbl_participation B ON A.CHALLENGE_NO = B.CHALLENGE_NO
   WHERE B.MEMBER_NO = ?;
  `
}

exports.selectOpenChallengeByMemberNo = () => {
  return `
  SELECT A.CHALLENGE_NO
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
    FROM tbl_challenge A
   WHERE MEMBER_NO = ?
  `
}

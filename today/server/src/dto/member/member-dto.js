class MemberDTO {

  memberNo;
  memberId;
  memberPwd;
  withDrawalYn;
  nickname;
  enrollDate;
  withDrawalDate;
  memberRole;
  constructor(data) {
    this.memberNo = data[0].MEMBER_NO;
    this.memberId = data[0].MEMBER_ID;
    this.memberPwd = data[0].MEMBER_PWD;
    this.withDrawalYn = data[0].WITHDRAWAL_YN;
    this.nickname = data[0].NICKNAME;
    this.enrollDate = data[0].ENROLL_DATE;
    this.withDrawalDate = data[0].WITHDRAWAL_DATE;
    this.memberRole = data[0].MEMBER_ROLE;
  }
}

module.exports = MemberDTO;
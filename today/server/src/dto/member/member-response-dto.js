class MemberDTO {
  memberNo;
  memberId;
  memberPwd;
  nickname;
  enrollDate;
  withdrawDate;
  memberRole;

  constructor(data) {
    this.memberNo = data.MEMBER_NO;
    this.memberId = data.MEMBER_ID;
    this.memberPwd = data.MEMBER_PWD;
    this.nickname = data.NICKNAME;
    this.enrollDate = data.ENROLL_DATE;
    this.withdrawDate = data.WITHDRAWAL_DATE;
    this.memberRole = data.MEMBER_ROLE;
  }
}

module.exports = MemberDTO;
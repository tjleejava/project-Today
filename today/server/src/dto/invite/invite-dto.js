class InviteDTO {

inviteNo;
founderNo;
memberNo;
challengeNo;
deleteYn;
date;
challengeName;
founderName;

  constructor(data) {
    this.inviteNo = data.INVITE_NO;
    this.founderNo = data.FOUNDER_NO;
    this.memberNo = data.MEMBER_NO;
    this.challengeNo = data.CHALLENGE_NO;
    this.deleteYn = data.DELETE_YN;
    this.date = data.DATE;
    this.challengeName = data.CHALLENGE_NAME;
    this.founderName = data.NICKNAME;
  }
}

module.exports = InviteDTO;
class ParticipationDTO {
  participationNo;
  memberNo;
  challengeNo;
  participationDate;
  participationStatusNo;
  constructor(data) {
    this.participationNo = data.PARTICIPATION_NO;
    this.memberNo = data.MEMBER_NO;
    this.challengeNo = data.CHALLENGE_NO;
    this.participationDate = data.PARTICIPATION_DATE;
    this.participationStatusNo = data.PARTICIPATION_STATUS_NO;
  }
}

module.exports = ParticipationDTO;
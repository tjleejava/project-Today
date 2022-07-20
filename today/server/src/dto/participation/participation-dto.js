class ParticipationDTO {
  participationNo;
  memberNo;
  challengeNo;
  participationDate;
  participationStatusNo;
  constructor(data) {
    this.participationNo = data[0].PARTICIPATION_NO;
    this.memberNo = data[0].MEMBER_NO;
    this.challengeNo = data[0].CHALLENGE_NO;
    this.participationDate = data[0].PARTICIPATION_DATE;
    this.participationStatusNo = data[0].PARTICIPATION_STATUS_NO;
  }
}

module.exports = ParticipationDTO;
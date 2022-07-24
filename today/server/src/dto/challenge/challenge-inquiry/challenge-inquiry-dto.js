class ChallengeInquiryDTO {
  challengeInquiryNo;
  challengeInquiryTitle;
  challengeInquiryContent;
  participationNo;
  deleteStatus;
  challengeInquiryDate;
  challengeNo;
  memberNo;
  nickname;

  constructor(data) {
    this.challengeInquiryNo = data.CHALLENGE_INQUIRY_NO;
    this.challengeInquiryTitle = data.CHALLENGE_INQUIRY_TITLE;
    this.challengeInquiryContent = data.CHALLENGE_INQUIRY_CONTENT;
    this.participationNo = data.PARTICIPATION_NO;
    this.deleteStatus = data.DEL_YN;
    this.challengeInquiryDate = data.CHALLENGE_INQUIRY_DATE;
    this.challengeNo = data.CHALLENGE_NO;
    this.memberNo = data.MEMBER_NO;
    this.nickname = data.NICKNAME;
  }
}

module.exports = ChallengeInquiryDTO;
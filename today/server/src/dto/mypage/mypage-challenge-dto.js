class MypageChallengeDTO {
  challengeNo;
  challengeTitle;
  startDate;
  challengeTerm;
  challengeScope;
  challengeCategoryNo;
  memberNo;
  maxAmount;
  challengeStatusNo;
  challengeAuthExplan;
  challengeInfo;
  challengeFrequency;
  challengeStartTime;
  challengeEndtime;
  challengeCategoryName;
  savedPath;
  savedName;
  statusName;

  constructor(data) {
    this.challengeNo = data.CHALLENGE_NO;
    this.challengeTitle = data.CHALLENGE_NAME;
    this.startDate = data.CHALLENGE_START_DATE;
    this.challengeTerm = data.CHALLENGE_TERM;
    this.challengeScope = data.CHALLENGE_SCOPE;
    this.challengeCategoryNo = data.CHALLENGE_CATEGORY_NO;
    this.memberNo = data.MEMBER_NO;
    this.maxAmount = data.CHALLENGE_MAX_AMOUNT;
    this.challengeStatusNo = data.CHALLENGE_STATUS_NO;
    this.challengeAuthExplan = data.CHALLENGE_AUTH_EXPLAN;
    this.challengeInfo = data.CHALLENGE_INFO;
    this.challengeFrequency = data.CHALLENGE_FREQUENCY;
    this.challengeStartTime = data.CHALLENGE_START_TIME;
    this.challengeEndtime = data.CHALLENGE_END_TIME;
    this.challengeCategoryName = data.CHALLENGE_CATEGORY_NAME;
    this.savedPath = data.SAVED_PATH;
    this.savedName = data.SAVED_NAME;
    this.statusName = data.CHALLENGE_STATUS_NAME;
  }
}

module.exports = MypageChallengeDTO;
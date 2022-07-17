class RankingDTO {

  challengeNo;
  challengeTitle;
  savedPath;
  savedName;
  startDate;
  categoryName;
  constructor(data) {
    this.challengeNo = data.CHALLENGE_NO;
    this.challengeTitle = data.CHALLENGE_NAME;
    this.savedPath = data.SAVED_PATH;
    this.savedName = data.SAVED_NAME;
    this.startDate = data.CHALLENGE_START_DATE;
    this.categoryName = data.CHALLENGE_CATEGORY_NAME;
  }
}

module.exports = RankingDTO;
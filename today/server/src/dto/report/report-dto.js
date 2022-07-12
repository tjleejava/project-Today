class ReportDTO {
  reportNo;
  reportContent;
  reportDate;
  reportStatus;
  reportStatusName;
  memberNo;
  reporterNo;
  challengeNo;
  categoryNo;
  categoryName;
  categoryType;
  nickname;
  challengeName;

  constructor(data) {
    this.reportNo = data.REPORT_NO;
    this.reportContent = data.REPORT_CONTENT;
    this.reportDate = data.REPORT_DATE;
    this.reportStatus = data.REPORT_STATUS;
    this.reportStatusName = data.REPORT_STATUS_NAME;
    this.memberNo = data.MEMBER_NO;
    this.reporterNo = data.REPORTER_NO;
    this.challengeNo = data.CHALLENGE_NO;
    this.categoryNo = data.CATEGORY_NO;
    this.categoryName = data.CATEGORY_NAME;
    this.categoryType = data.CATEGORY_TYPE;
    this.nickname = data.NICKNAME;
    this.challengeName = data.CHALLENGE_NAME;
  }
}

module.exports = ReportDTO;
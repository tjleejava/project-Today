class RegistReportDTO {

  reportContent;
  reportDate;
  memberNo;
  reporterNo;
  challengeNo;
  categoryNo;

  constructor(data) {

    this.reportContent = data.reportContent
    this.reportDate = data.reportDate
    this.memberNo = data.memberNo;
    this.reporterNo = data.reporterNo;
    this.challengeNo = parseInt(data.reportChallengeNo);
    this.categoryNo = parseInt(data.reportCategory);
  }
}

module.exports = RegistReportDTO;
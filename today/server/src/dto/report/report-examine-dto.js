class ReportExamineDTO {

  reportExamineHistoryNo;
  reportExamineDate;
  reportNo;
  reportExamineCategory;
  penaltyDate;
  refuseReason;
  challengeCancelDate;
  
  constructor(data) {
     this.reportExamineHistoryNo = data.REPORT_EXAMINE_HISTORY_NO;
     this.reportExamineDate = data.REPORT_EXAMINE_DATE;
     this.reportNo = data.REPORT_NO;
     this.reportExamineCategory = data.REPORT_EXAMINE_CATEGORY;
     this.penaltyDate = data.PENALTY_DATE;
     this.refuseReason = data.REFUSE_REASON;
     this.challengeCancelDate = data.CHALLENGE_CANCEL_DATE;
  }
}

module.exports = ReportExamineDTO;
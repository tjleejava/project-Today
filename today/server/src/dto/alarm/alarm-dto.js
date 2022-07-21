class AlarmDTO {

  alarmNo;
  categoryNo;
  categoryName;
  memberNo;
  alarmContent;
  alarmDate;
  checkYn;

  constructor(data) {

    this.alarmNo = data.ALARM_NO;
    this.categoryNo = data.ALARM_CATEGORY_NO;
    this.categoryName = data.ALARM_CATEGORY_NAME;
    this.memberNo = data.MEMBER_NO;
    this.alarmContent = data.ALARM_CONTENT;
    this.alarmDate = data.ALARM_DATE;
    this.checkYn = data.CHECK_YN;
  }
}

module.exports = AlarmDTO;
class RegistChallengeDTO {
  category;
  title;
  description;
  freq;
  term;
  scope;
  startTime;
  endTime;
  startDate;
  info;
  file;
  amount;
  authDay;
  startTime;
  endTime;

  constructor(data) {
    this.category = data.category;
    this.title = data.title;
    this.description = data.description;
    this.freq = data.freq;
    this.term = data.term;
    this.scope = data.scope;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.startDate = data.startDate;
    this.info = data.info;
    this.file = data.file;
    this.amount = data.amount;
    this.authDay = data.authDay;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}

module.exports = RegistChallengeDTO;
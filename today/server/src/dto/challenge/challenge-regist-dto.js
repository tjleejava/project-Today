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
  }
}

module.exports = RegistChallengeDTO;
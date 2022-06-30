class AuthFrequencyDTO {

  frequencyNo;
  challengeNo;
  dayNo;
  constructor(data) {
    this.frequencyNo = data.FREQUENCY_NO;  
    this.challengeNo = data.CHALLENGE_NO;    
    this.dayNo = data.DAY_NO;    
  }
}

module.exports = AuthFrequencyDTO;
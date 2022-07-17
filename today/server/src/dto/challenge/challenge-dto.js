class ChallengeDTO {

    challengeNo;
    challengeName;
    challengeStartDate;
    challengeTerm;
    challengeScope;
    challengeCategoryNo;
    challengeCategoryName;
    memberNo;
    challengeMaxAmount;
    challengeStatusNo;
    challengeStatusName;
    challengeAuthExplan;
    challengeInfo;
    challengeFrequency;
    startTime;
    endTime;
    nickname;

    constructor(data) {

        this.challengeNo = data[0].CHALLENGE_NO;
        this.challengeName = data[0].CHALLENGE_NAME;
        this.challengeStartDate = data[0].CHALLENGE_START_DATE;
        this.challengeTerm = data[0].CHALLENGE_TERM;
        this.challengeScope = data[0].CHALLENGE_SCOPE;
        this.challengeCategoryNo = data[0].CHALLENGE_CATEGORY_NO;
        this.challengeCategoryName = data[0].CHALLENGE_CATEGORY_NAME;
        this.memberNo = data[0].MEMBER_NO;
        this.challengeMaxAmount = data[0].CHALLENGE_MAX_AMOUNT;
        this.challengeStatusNo = data[0].CHALLENGE_STATUS_NO;
        this.challengeStatusName = data[0].CHALLENGE_STATUS_NAME;
        this.challengeAuthExplan = data[0].CHALLENGE_AUTH_EXPLAN;
        this.challengeInfo = data[0].CHALLENGE_INFO;
        this.challengeFrequency = data[0].CHALLENGE_FREQUENCY;
        this.startTime = data[0].CHALLENGE_START_TIME;
        this.endTime = data[0].CHALLENGE_END_TIME;
        this.nickname = data[0].NICKNAME;
    }
}

module.exports = ChallengeDTO;
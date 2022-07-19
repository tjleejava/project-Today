class ChallengeArrayDTO {

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

        this.challengeNo = data.CHALLENGE_NO;
        this.challengeName = data.CHALLENGE_NAME;
        this.challengeStartDate = data.CHALLENGE_START_DATE;
        this.challengeTerm = data.CHALLENGE_TERM;
        this.challengeScope = data.CHALLENGE_SCOPE;
        this.challengeCategoryNo = data.CHALLENGE_CATEGORY_NO;
        this.challengeCategoryName = data.CHALLENGE_CATEGORY_NAME;
        this.memberNo = data.MEMBER_NO;
        this.challengeMaxAmount = data.CHALLENGE_MAX_AMOUNT;
        this.challengeStatusNo = data.CHALLENGE_STATUS_NO;
        this.challengeStatusName = data.CHALLENGE_STATUS_NAME;
        this.challengeAuthExplan = data.CHALLENGE_AUTH_EXPLAN;
        this.challengeInfo = data.CHALLENGE_INFO;
        this.challengeFrequency = data.CHALLENGE_FREQUENCY;
        this.startTime = data.CHALLENGE_START_TIME;
        this.endTime = data.CHALLENGE_END_TIME;
        this.nickname = data.NICKNAME;
    }
}

module.exports = ChallengeArrayDTO;
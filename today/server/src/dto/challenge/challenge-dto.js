class ChallengeDTO {

    challengeNo;
    challengeName;
    challengeStartDate;
    challengeTerm;
    challengeScope;
    challengeCategoryNo;
    memberNo;
    challengeMaxAmount;
    challengeStatusNo;
    challengeAuthExplan;
    challengeInfo;

    constructor(data) {

        this.challengeNo = data[0].CHALLENGE_NO;
        this.challengeName = data[0].CHALLENGE_NAME;
        this.challengeStartDate = data[0].CHALLENGE_START_DATE;
        this.challengeTerm = data[0].CHALLENGE_TERM;
        this.challengeScope = data[0].CHALLENGE_SCOPE;
        this.challengeCategoryNo = data[0].CHALLENGE_CATEGORY_NO;
        this.memberNo = data[0].MEMBER_NO;
        this.challengeMaxAmount = data[0].CHALLENGE_MAX_AMOUNT;
        this.challengeStatusNo = data[0].CHALLENGE_STATUS_NO;
        this.challengeAuthExplan = data[0].CHALLENGE_AUTH_EXPLAN;
        this.challengeInfo = data[0].CHALLENGE_INFO;
    }
}
module.exports = ChallengeDTO;
const getConnection = require('../../database/connection');
const ChallengeRepo = require('../../repositories/challenge/challenge-repo');

exports.findChallengeByNo = (challengeNo) => {


  return new Promise( async (resolve, reject) => {
        
    const connection = getConnection();

    const challengeResults = await ChallengeRepo.selectChallengeByNo(connection, challengeNo);
    const authDayResults = await ChallengeRepo.selectAuthDayByChallengeNo(connection, challengeNo);
    const attachmentResults = await ChallengeRepo.selectAttachmentByChallengeNo(connection, challengeNo);

    connection.end();

    resolve({challengeInfo: challengeResults, authDayInfo: authDayResults, attachmentInfo: attachmentResults});
  });
};

exports.checkChallengeAuthByMemberNo = (authInfo) => {

    const {memberNo, challengeNo} = authInfo;
    return new Promise( async (resolve, reject) => {
        const connection = getConnection();

        // 참여자인지 확인
        const checkParticipation = await ChallengeRepo.selectParticipationByMemberNo(connection, authInfo);

        const selectParticipationCount = await ChallengeRepo.selectParticipationCount(connection, challengeNo);

        let partCount = 0;
        for(let i = 0; i < selectParticipationCount.length; i++) {
            if(selectParticipationCount[i].count == 1) {
                partCount++;
            }
        }

        connection.end();

        resolve({ partCount: partCount, isPartIn: checkParticipation[0].count });
    });
};

exports.modifyChallenge = (modifyInfo) => {


    return new Promise( async (resolve, reject) => {
        const connection = getConnection();

        connection.end();
    });
};

exports.findRankings = () => {

    return new Promise( async (resolve, reject) => {
        const connection = getConnection();

        const results = await ChallengeRepo.selectRankings(connection);
        connection.end();

        resolve(results);
    });
};

exports.registChallenge = (registChallenge) => {

    return new Promise( async (resolve, reject) => {

        const connection = getConnection();
        connection.connect();

        const result = await ChallengeRepo.insertChallenge(connection, registChallenge);

        const challengeNo = result.insertId;

        for(let i = 0; i < registChallenge.file.length; i++) {
            const inputFile = { ...registChallenge.file[i] };
            inputFile.challengeNo = challengeNo;
            inputFile.type= i + 1;
            ChallengeRepo.insertChallengeAttachment(connection, inputFile);
        }

        for(let i = 0; i < 7; i++) {
            if(registChallenge.authDay['day' + i]) {
                const authFreqDay = {
                    dayNo: i,
                    challengeNo: challengeNo
                };
                ChallengeRepo.insertChallengeFreqDay(connection, authFreqDay);
            }
        }

        connection.end();

        resolve(result);
    });
};

exports.findByCategoryNo = (categoryNo) => {

    return new Promise( async (resolve, reject) => {

        const connection = getConnection();

        const results = ChallengeRepo.selectByCategoryNo(connection, categoryNo);

        connection.end();

        resolve(results);
    });
};
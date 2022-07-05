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

exports.modifyChallenge = (modifyInfo) => {


    return new Promise( async (resolve, reject) => {
        connection = getConnection();
        console.log(modifyInfo.challengeInfo);
        console.log(modifyInfo.attachmentInfo);
        console.log(modifyInfo.modifyAttachment);

        connection.end();
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
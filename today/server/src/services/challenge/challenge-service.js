const getConnection = require('../../database/connection');
const ChallengeRepo = require('../../repositories/challenge/challenge-repo');

exports.findChallengeByNo = (challengeNo) => {

    console.log(challengeNo);

    return new Promise( async (resolve, reject) => {
        
    const connection = getConnection();

    const result = await ChallengeRepo.selectChallengeByNo(connection, challengeNo);

    console.log('service layer : ');
    console.log(result);

    connection.end();

    resolve(result);
    });
};
exports.registChallenge = (registChallenge) => {

    console.log('servie layer');
    console.log('registChallenge : ', registChallenge);

    
    return new Promise( async (resolve, reject) => {

        const connection = getConnection();
        connection.connect();

        const result = await ChallengeRepo.insertChallenge(connection, registChallenge);

        
        console.log('service result : ');
        console.log(result);
        const challengeNo = result.insertId;
        console.log(registChallenge.file.length);
        for(let i = 0; i < registChallenge.file.length; i++) {
            const inputFile = { ...registChallenge.file[i] };
            inputFile.challengeNo = challengeNo;
            inputFile.type= i + 1;
            ChallengeRepo.insertChallengeAttachment(connection, inputFile);
        }
        console.log('registChallenge.authDay : ', registChallenge.authDay);
        console.log('registChallenge.authDay[0] : ', registChallenge.authDay['day' + 0]);
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
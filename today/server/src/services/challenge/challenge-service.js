const getConnection = require('../../database/connection');
const ChallengeRepo = require('../../repositories/challenge/challenge-repo');

exports.registChallenge = (registChallenge) => {

    console.log('servie layer');
    console.log('registChallenge : ', registChallenge);

    
    return new Promise( async (resolve, reject) => {

        const connection = getConnection();
        connection.connect();

        const result = await ChallengeRepo.insertChallenge(connection, registChallenge);

        const challengeNo = result.insertId;
        console.log(registChallenge.file.length);
        for(let i = 0; i < registChallenge.file.length; i++) {
            ChallengeRepo.insertChallengeAttachment(connection, registChallenge.file[i], challengeNo, i);
        }
        
        console.log('challengeNo : ', challengeNo);

        

        connection.end();

        resolve(result);

    });
};
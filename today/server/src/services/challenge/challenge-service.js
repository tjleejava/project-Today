const getConnection = require('../../database/connection');
const ChallengeRepo = require('../../repositories/challenge/challenge-repo');

exports.findChallenges = (pageInfo) => {

    const { searchValue, category } = pageInfo;
    let challenges;
    return new Promise(async (resolve, reject) => {
        const connection = getConnection();
        let totalCounts = 0;

        if(category == '0') {
            if(searchValue == '') {
                totalCounts = await ChallengeRepo.selectAllChallengeCount(connection);
                challenges = await ChallengeRepo.selectAllChallenge(connection, pageInfo);
            } else {
                totalCounts = await ChallengeRepo.selectAllChallengeCountBySearchValue(connection, searchValue);
                challenges = await ChallengeRepo.selectAllChallengeBySearchValue(connection, pageInfo);
            }
        } else {
            if(searchValue == '') {
                totalCounts = await ChallengeRepo.selectChallengeCount(connection, category);
                challenges = await ChallengeRepo.selectChallenge(connection, pageInfo);
            } else {
                totalCounts = await ChallengeRepo.selectChallengeCountBySearchValue(connection, pageInfo);
                challenges = await ChallengeRepo.selectChallengeBySearchValue(connection, pageInfo);
            }
        }
        
        connection.end();

        
        resolve(
            {
                challenges: challenges, 
                pageInfo: {...pageInfo,totalItemCount: totalCounts}
            }
        );
    });
};

exports.findChallengeByNo = (challengeNo) => {


  return new Promise( async (resolve, reject) => {
        
    const connection = getConnection();
    console.log('findChallengeByNo service , challengeNo : ', challengeNo);
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

exports.registChallenge = (registInfo) => {
    const {authDay, fileInfos, memberNo} = registInfo;
    
    return new Promise( async (resolve, reject) => {

        const connection = getConnection();
        connection.connect();

        const result = await ChallengeRepo.insertChallenge(connection, registInfo);
        const challengeNo = result.insertId;

        for(let i = 0; i < fileInfos.length; i++) {
            
            fileInfos[i].challengeNo = challengeNo;
            fileInfos[i].type= i + 1;
            ChallengeRepo.insertChallengeAttachment(connection, fileInfos[i]);
        }

        for(let i = 0; i < 7; i++) {
            if(authDay['day' + i]) {
                const authFreqDay = {
                    dayNo: i,
                    challengeNo: challengeNo
                };
                ChallengeRepo.insertChallengeFreqDay(connection, authFreqDay);
            }
        }
        
        ChallengeRepo.insertParticipation(connection, registInfo, challengeNo);

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
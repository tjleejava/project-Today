const fs = require('fs');
const getConnection = require('../../database/connection');
const ChallengeRepo = require('../../repositories/challenge/challenge-repo');
const HttpStatus = require('http-status');

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

    const {challenge, attachments} = modifyInfo;
    return new Promise( async (resolve, reject) => {
        const connection = getConnection();

        //챌린지 정보 수정
        const modifyResult = await ChallengeRepo.modifyChallenge(connection, challenge);

        //챌린지 사진정보 수정
        for(let i = 0; i < attachments.length; i++) {

            if(attachments[i].type) {

                //수정된 기존 파일 삭제
                const attachmentInfo = await ChallengeRepo.selectChallengeAtachment(connection, {challengeNo: challenge.challengeNo, typeNo: attachments[i].type });

                const {savedName, savedPath} = attachmentInfo;

                fs.unlink(`${__dirname}/../../../public/${savedPath}/${savedName}.png`, err => {
                    console.log(err);
                });

                //새로운 업로드 파일정보로 기존 경로 수정
                ChallengeRepo.updateChallengeAttachment(
                    connection, 
                    {
                        challengeNo: challenge.challengeNo,
                        typeNo: attachments[i].type,
                        fileInfo: attachments[i].fileInfo
                    }
                );
            }
        }
        
        connection.end();

        resolve(modifyResult);
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

exports.participateChallenge = (data) => {
    const NOT_PARTICIPATE = null;
    console.log('서비스')
    return new Promise( async (resolve, reject) => {
        const connection = getConnection();
        await ChallengeRepo.findChallengeParticipation(connection, data)
        .then(async(res) => {
            if(res === NOT_PARTICIPATE) {
                console.log('동작하니')
                const insertResult = await ChallengeRepo.insertParticipateMemberInChallenge(connection, data)
                console.log(insertResult);
                if(insertResult != null) {
                    let today = new Date();

                    let year = today.getFullYear();
                    let month = ('0' + (today.getMonth() + 1)).slice(-2);
                    let day = ('0' + today.getDate()).slice(-2);

                    let hours = ('0' + today.getHours()).slice(-2);
                    let minutes = ('0' + today.getMinutes()).slice(-2);
                    let seconds = ('0' + today.getSeconds()).slice(-2);

                    let date = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
                    console.log(date);
                    const participateNo = insertResult.insertId;
                    const participateHistoryResult = await ChallengeRepo.insertParticipationHistory(connection, {no: participateNo, categoryNo: 1, date: date})

                }
                const returnData = {
                    status: HttpStatus.CREATED,
                    message: '참여 성공',
                    response: insertResult
                }
                resolve(returnData);
            } else {
                const returnData = {
                    status: HttpStatus.ACCEPTED,
                    message: '이미 참여하고 있습니다.',
                    response: res
                  }
                resolve(returnData);
            }
        });
        connection.end();     
    })
}

exports.removeChallenge = ({challengeNo, date, categoryNo}) => {

    return new Promise( async (resolve, reject,) => {

        const connection = getConnection();

        //챌린지 상태 변경
        const challengeStatusResult = await ChallengeRepo.deleteChallengeByAdmin(connection, challengeNo, categoryNo);

        //챌린지 참여인원 조회
        const participations = await ChallengeRepo.selectParticipations(connection, challengeNo);

        for(let i = 0; i < participations.length; i++) {
            //챌린지 참여인원 상태 변경
            //챌린지 참여인원 이력 추가
            ChallengeRepo.updateParticipationStatus(connection, {no: participations[i].participationNo, statusNo: categoryNo});
            ChallengeRepo.insertParticipationHistory(connection, {no: participations[i].participationNo, date: date, categoryNo: categoryNo});
            //알림에 추가
            let content = (categoryNo == 5) ? '관리자' : '개설자';
            content += '에 의해 챌린지가 취소되었습니다.';
            ChallengeRepo.insertAlarm(connection, {memberNo: participations[i].memberNo, categoryNo: 4, content: content, date: date});
        }

        connection.end();

        resolve(challengeStatusResult);
    });
};

exports.secessionChallenge = (secessionInfo) => {

    return new Promise( async (resolve, reject) => {

        const connection = getConnection();

        const participationNo = await ChallengeRepo.selectParticipationByMemberNoAndChallengeNo(connection, secessionInfo);
        const participationResult = await ChallengeRepo.updateParticipationStatus(connection, {no: participationNo, statusNo: 3});
        const participateHistoryResult = await ChallengeRepo.insertParticipationHistory(connection, {no: participationNo, categoryNo: 3, date: secessionInfo.date})

        connection.end();

        resolve({});
    });
};

exports.registInquiry = (inquiryInfo) => {
    const challengeNo = inquiryInfo.challengeNo;
    const memberNo = inquiryInfo.memberNo;
    return new Promise(async(resolve, reject) => {

        const connection = getConnection();
        const participationNo = await ChallengeRepo.selectParticipationNo(connection, challengeNo, memberNo);
        inquiryInfo.participationNo = participationNo;
        const insertResult = await ChallengeRepo.insertInquiry(connection, inquiryInfo);
        console.log(insertResult);
        resolve(insertResult);
    })
}

exports.findInquiries = (challengeNo) => {
    
    return new Promise(async(resolve, reject) => {
        const connection = getConnection();
        const selectResult = await ChallengeRepo.selectInquiries(connection, challengeNo);
        try{
            const resolveData = {
                status: HttpStatus.OK,
                message: '조회 성공',
                result: selectResult
            }
            resolve(resolveData);
        } catch {
            const rejectData = {
                status: HttpStatus.NO_CONTENT,
                message: '값이 없습니다.'
            }
            reject(rejectData);
        }
        
    })
}
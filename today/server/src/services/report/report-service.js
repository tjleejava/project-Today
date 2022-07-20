const getConnection = require('../../database/connection');
const RegistReportDTO = require('../../dto/report/regist-report-dto');
const ReportRepo = require('../../repositories/report/report-repo');

exports.registRefuse = (refuseInfo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await ReportRepo.insertRefuse(connection, refuseInfo);
    
    await ReportRepo.updateReportStatus(connection, {reportNo: refuseInfo.reportNo, statusNo: 3});
    connection.end();

    resolve(result);
  });
};

exports.registAccept = (acceptInfo) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const {challengePenalty, hostPenalty, penaltyDate, reportNo, date, penaltyEndDate} = acceptInfo;

    
    const reportInfo = await ReportRepo.selectReport(connection, reportNo);
    
    //신고 심사 > 승인 등록
    const acceptResult = await ReportRepo.insertExamineAccept(connection, {date: date, reportNo: reportInfo.reportNo, category: '승인', cancelDate: challengePenalty? date: null, penaltyDate: hostPenalty? parseInt(penaltyDate): null });
    const reportStatusResult = await ReportRepo.updateReportStatus(connection, {reportNo: reportNo, statusNo: 2});

    // 챌린지 취소 
    // 해당 챌린지 상태 취소로 변경 > 참여자들 알림 전송 
    if(challengePenalty) {

      //챌린지 상태 변경
      await ReportRepo.updateChallengeStatus(connection, reportInfo.challengeNo);
      
      //참여내역에 참여자 상태 변경
      //해당 챌린지에 참여내역 조회
      const participations = await ReportRepo.selectParticipations(connection, reportInfo.challengeNo);

      // 조회내역 for문 돌리면서 이력테이블에 insert ( status = 5(취소)로)
      for(let i = 0; i < participations.length; i++) {
        ReportRepo.updatePariticipationStatus(connection, {no: participations[i].participationNo, statusNo: 5});
        ReportRepo.insertParticipationHistory(connection, {no: participations[i].participationNo, date: date, categoryNo: 5});
        
      // 알림에 추가
        ReportRepo.insertAlarm(connection, {memberNo: participations[i].memberNo, categoryNo: 4, content: '관리자에 의해 챌린지가 취소되었습니다', date: date});
      }
    }

    //  개설자 패널티 부여 
    if(hostPenalty) {
      const hostNo = await ReportRepo.selectHostNo(connection, reportInfo.challengeNo);
      const penaltyInfo = {
        startDate: date,
        memberNo: hostNo,
        endDate: penaltyEndDate,
        penaltyCategory: '신고',
        historyNo:acceptResult.insertId 

      };
      const userPenaltyResult = await ReportRepo.insertUserPenalty(connection, penaltyInfo);
      
    }




    connection.end();
    resolve(acceptResult);
  });

};

exports.checkChallengeReportAccepted = (reportNo) => {

  return new Promise( async (resolve, reject) => {
    
    const connection = getConnection();

    const result = await ReportRepo.selectChallengeReportAccept(connection, reportNo);

    connection.end();

    resolve(result);
  });
};

exports.findReport = (reportNo) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const report = await ReportRepo.selectReport(connection, reportNo);
    const reportExamine = await ReportRepo.selectReportExamine(connection, reportNo);

    connection.end();
    resolve({report: report, reportExamine: reportExamine});
  });
};
exports.findReports = (pageInfo) => {

  return new Promise( async (resolve, reject) => {
    let pageCounts;
    let results;
    const connection = getConnection();

    if(pageInfo.type === 'challenge') {
      pageCounts = await ReportRepo.selectChallengeReportsCount(connection);
      results = await ReportRepo.selectChallengeReports(connection, pageInfo);
    } else {
      pageCounts = await ReportRepo.selectUserReportsCount(connection);
      results = await ReportRepo.selectUserReports(connection, pageInfo);
    }

    connection.end();

    resolve({
      results: results,
      totalItemCount: pageCounts
    })
  });
};
exports.registReport = (registInfo) => {
  
  
  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const registDTO = new RegistReportDTO(registInfo);
    
    const result = await ReportRepo.insertReport(connection, registDTO);
    
    connection.end();

    resolve(result);
  });
};

exports.checkChallengeReport = (checkInfo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await ReportRepo.selectChallengeReport(connection, checkInfo);

    connection.end();

    resolve(result);
  });
};
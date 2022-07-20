const ReportQuery = require('../../database/report/report-query');
const ReportDTO = require('../../dto/report/report-dto');
const ReportExamineDTO = require('../../dto/report/report-examine-dto');
const ParticipationDTO = require('../../dto/report/participation-dto');
exports.selectReport = (connection, reportNo) => {

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.selectReport(), [reportNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(new ReportDTO(result[0]));
    });
  });
};

exports.selectReportExamine = (connection, reportNo) => {

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.selectReportExamine(), [reportNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(result.length > 0 ? new ReportExamineDTO(result[0]) : {});
    });
  });
};

exports.selectChallengeReportAccept = (connection, reportNo) => {

  return new Promise ( async (resolve, reject) => {
    connection.query(ReportQuery.selectChallengeReportAccept(), [reportNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

exports.selectUserReportsCount = (connection) => {

  return new Promise( async (resolve, reject) => {
    connection.query(ReportQuery.selectUserReportsCount(), [], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};
exports.selectUserReports = (connection, pageInfo) => {
  
  const startRow = pageInfo.pageItemCount * (pageInfo.page - 1) + 1;
  const endRow = pageInfo.pageItemCount * pageInfo.page;

  return new Promise( async (resolve, reject) => {
    
    
  });
};

exports.selectChallengeReportsCount = (connection) => {

  return new Promise( async (resolve, reject) => {
    connection.query(ReportQuery.selectChallengeReportsCount(), [], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};
exports.selectChallengeReports = (connection, pageInfo) => {

  const startRow = pageInfo.pageItemCount * (pageInfo.page - 1);

  const pageItemCount = pageInfo.pageItemCount ;

  return new Promise( async (resolve, reject) => {
    connection.query(ReportQuery.selectChallengeReport(), [startRow, pageItemCount], (err, result, fields) => {
      if(err) {
        reject(err);
      } 
      const reports = [];
      for(let i = 0; i < result.length; i++) {
        reports.push(new ReportDTO(result[i]));
      }

      resolve(reports);
    });
    
  });
};

exports.insertReport = (connection, registDTO) => {

  return new Promise((resolve, reject) => {
    const {reportContent, reportDate, memberNo, reporterNo, challengeNo, categoryNo} = registDTO;
    connection.query(ReportQuery.insertReport(), [reportContent, reportDate, memberNo, reporterNo, challengeNo, categoryNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
}

exports.selectChallengeReport = (connection, {memberNo, challengeNo}) => {

  return new Promise((resolve, reject) => {
    
    connection.query(ReportQuery.selectChallengeReportbyNo(), [memberNo, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].COUNT);
    });
  });
};

exports.insertRefuse = (connection, refuseInfo) => {

  const { date, reportNo, content } = refuseInfo;

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.insertRefuse(), [date, parseInt(reportNo), content], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.updateChallengeStatus = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.updateChallengeStatus(), [challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectParticipations = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.selectParticipations(), [challengeNo], (err, results, fields) => {

      if(err) {
        reject(err);
      }
      const participations = [];
      for(let i = 0; i < results.length; i++) {
        participations.push(new ParticipationDTO(results[i]));
      }

      resolve(participations);
      
    });
  });
};

exports.updateReportStatus = (connection, updateInfo) => {

  return new Promise((resolve, reject) => {

    const {reportNo, statusNo} = updateInfo;
    connection.query(ReportQuery.updateReportStatus(), [statusNo, reportNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.insertAlarm = (connection, insertInfo) => {

  const { memberNo, categoryNo, content, date } = insertInfo;

  return new Promise((resolve, reject) => {

    connection.query(ReportQuery.insertAlarm(), [categoryNo, memberNo, content, date], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(err);
    });
  });
};

exports.updatePariticipationStatus = (connection, {no, statusNo}) => {
  return new Promise((resolve, reject) => {
    connection.query(ReportQuery.updatePariticipationStatus(), [statusNo, no], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.insertParticipationHistory = (connection, historyInfo) => {
  
  return new Promise((resolve, reject) => {

    const { no, categoryNo, date } = historyInfo;
    
    connection.query(ReportQuery.insertParticipationHistory(), [no, categoryNo, date], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectHostNo = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {
    connection.query(ReportQuery.selectHostNo(), [challengeNo], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result[0].no);
    });
  });
};

exports.insertExamineAccept = (connection, examineInfo) => {

  return new Promise((resolve, reject) => {
    const {date, reportNo, category, penaltyDate, cancelDate} = examineInfo;
    connection.query(ReportQuery.insertExamineAccept(), [date, reportNo, category, penaltyDate, cancelDate], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
}

exports.insertUserPenalty = (connection, penaltyInfo) => {

  return new Promise((resolve, reject) =>{
    const {startDate, memberNo, endDate, penaltyCategory, historyNo} = penaltyInfo;

    connection.query(ReportQuery.insertUserPenalty(), [startDate, memberNo, endDate, penaltyCategory, historyNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      
      resolve(result);
    });
  });
};
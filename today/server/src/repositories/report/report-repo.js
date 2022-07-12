const ReportQuery = require('../../database/report/report-query');
const ReportDTO = require('../../dto/report/report-dto');


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
      console.log('result.length : ' + result.length);
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

exports.selectChallengeReport = (connection, checkInfo) => {

  return new Promise((resolve, reject) => {
    
    connection.query(ReportQuery.selectChallengeReportbyNo(), [3, 1], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};
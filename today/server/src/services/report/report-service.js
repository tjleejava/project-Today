const getConnection = require('../../database/connection');
const RegistReportDTO = require('../../dto/report/regist-report-dto');
const ReportRepo = require('../../repositories/report/report-repo');

exports.findReport = (reportNo) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const result = await ReportRepo.selectReport(connection, reportNo);

    connection.end();
    resolve(result);
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
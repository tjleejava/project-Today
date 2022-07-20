const HttpStatus = require('http-status');
const ReportService = require('../../services/report/report-service');

exports.registRefuse = async(req, res, next) => {
    
    const result = await ReportService.registRefuse(req.body);

    res.send(result);
};

exports.registAccept = async(req, res, next) => {
    const result = await ReportService.registAccept(req.body);

    res.send(result);
};

exports.checkChallengeReportAccepted = async(req, res, next) => {

    const reportNo = req.query.reportNo;
    const result = await ReportService.checkChallengeReportAccepted(reportNo);

    res.send(result);
};

exports.findReport = async(req, res, next) => {
    const reportNo = req.params.reportNo;

    let result = await ReportService.findReport(reportNo);
    
    res.send(result);
};

exports.findReports = async (req, res, next) => {

    const pageInfo = JSON.parse(req.query.pageInfo);
    
    const results = await ReportService.findReports(pageInfo);

    res.send(results);

};

exports.registReport = async(req, res, next) => {

    const result = await ReportService.registReport(req.body);
    
    res.send(result);
};

exports.checkChallengeReport = async(req, res, next) => {

    const result = await ReportService.checkChallengeReport(JSON.parse(req.query.checkInfo));

    console.log(result);
    res.send({result: result});
}; 
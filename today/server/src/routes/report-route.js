const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/report/report-controller');

router.get('/', ReportController.findReports);
router.post('/', ReportController.registReport);
router.get('/challengecheck', ReportController.checkChallengeReport);
router.get('/:reportNo', ReportController.findReport);

module.exports = router;
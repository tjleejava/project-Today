const express = require('express');
const router = express.Router();
const InquiryController = require('../controllers/platform-inquiry/platform-inquiry-controller');

router.post('/', InquiryController.registInquiry);

module.exports = router;
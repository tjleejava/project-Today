const express = require('express');
const router = express.Router();
const InquiryController = require('../controllers/platform-inquiry/platform-inquiry-controller');

router.post('/', InquiryController.registInquiry);
router.get('/', InquiryController.findInquiries);
router.get('/:inquiryNo', InquiryController.findInquiry);

module.exports = router;
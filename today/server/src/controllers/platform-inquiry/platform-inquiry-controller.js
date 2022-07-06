const HttpStatus = require('http-status');
const RegistPlatformInquiryDTO = require('../../dto/platform-inquiry/regist-inquiry');
const InquiryService = require('../../services/platform-inquiry/platform-inquiry-service');

exports.registInquiry = async (req, res, next) => {

  const result = await InquiryService.registInquiry(new RegistPlatformInquiryDTO(req.body));

  console.log(req.body);
  res.status(HttpStatus.OK).send(
    result
  );
};

exports.findInquiries = async(req, res, next) => {

  const memberNo = req.query.memberNo;
  const results = await InquiryService.findInquiries(memberNo);

  res.status(HttpStatus.OK).send(results);
};

exports.findInquiry = async(req, res, next) => {

  const inquiryNo = req.params.inquiryNo;

  const result = await InquiryService.findInquiry(inquiryNo);

  console.log(result);
  res.status(HttpStatus.OK).send(result);
}
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
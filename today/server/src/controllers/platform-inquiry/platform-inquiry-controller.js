const HttpStatus = require('http-status');
const RegistPlatformInquiryDTO = require('../../dto/platform-inquiry/regist-inquiry');
const InquiryService = require('../../services/platform-inquiry/platform-inquiry-service');

exports.registInquiry = async (req, res, next) => {

  const result = await InquiryService.registInquiry(new RegistPlatformInquiryDTO(req.body));

  res.status(HttpStatus.OK).send(
    result
  );
};

exports.findInquiries = async(req, res, next) => {

  const results = await InquiryService.findInquiries(req.query);

  res.status(HttpStatus.OK).send(results);
};

exports.findInquiry = async(req, res, next) => {

  const inquiryNo = req.params.inquiryNo;

  const result = await InquiryService.findInquiry(inquiryNo);

  res.status(HttpStatus.OK).send(result);
}

exports.findAllInquiries = async(req, res, next) => {
  const pageInfo = JSON.parse(req.query.pageInfo);
  
  const result = await InquiryService.findAllInquiries(pageInfo);

  res.status(HttpStatus.OK).send(result);
};

exports.modifyReply = async(req, res, next) => {
  const reply = req.body;

  const result = await InquiryService.modifyReply(reply);

  res.send({
    result: result,
    reply: reply
  })
};

exports.registReply = async(req, res, next) => {

  const replyInfo = {
    replyDate: req.body.reply.platfomrInquiryReplyDate,
    replyContent: req.body.reply.platfomrInquiryReplyContent,
    inquiryNo: req.body.inquiry.platformInquiryNo
  };

  const result = await InquiryService.registReply(replyInfo);

  res.send(result);
};
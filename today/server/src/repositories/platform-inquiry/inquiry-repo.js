const InquiryQuery = require('../../database/platform-inquiry/inquiry-query');
const InquiryDTO = require('../../dto/platform-inquiry/platform-inquiry');
const ReplyDTO = require('../../dto/platform-inquiry/platform-inquiry-reply');
exports.insertInquiry = (connection, registInfo) => {

  const memberNo = 6;
  const { platformInquiryTitle, platformInquiryContent, platformInquiryDate} = registInfo;

  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.insertInquiry(), [platformInquiryTitle, platformInquiryContent, platformInquiryDate, memberNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectInquiries = (connection, memberNo) => {
  
  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.selectInquiries(), [memberNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      const inquiries = [];
      for(let i = 0; i < result.length; i++) {
        result[i].PLATFORM_INQUIRY_REPLY_NO === null ? result[i].PLATFORM_INQUIRY_REPLY_NO = 'N': result[i].PLATFORM_INQUIRY_REPLY_NO = 'Y';
        console.log(result[i].PLATFORM_INQUIRY_REPLY_NO);
        inquiries.push(new InquiryDTO(result[i]));
      }
      resolve(inquiries);
    });
  });
};

exports.selectInquiry = (connection, inquiryNo) => {

  return new Promise((resolve, reject) => {
    connection.query(InquiryQuery.selectInquiry(),[inquiryNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }


      resolve(new InquiryDTO(result[0]));
    });
  });
};

exports.selectInquiryReply = (connection, inquiryNo) => {

  return new Promise((resolve, reject) => {
    connection.query(InquiryQuery.selectInquiryReply(),[inquiryNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(new ReplyDTO(result[0]));
    });
  });
};

exports.selectAllInquiries = (connection, pageInfo) => {

  return new Promise((resolve, reject) => {
    connection.query(InquiryQuery.selectAllInquiries(), [], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
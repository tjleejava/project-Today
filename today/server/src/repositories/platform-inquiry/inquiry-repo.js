const InquiryQuery = require('../../database/platform-inquiry/inquiry-query');
const InquiryDTO = require('../../dto/platform-inquiry/platform-inquiry');
const ReplyDTO = require('../../dto/platform-inquiry/platform-inquiry-reply');
exports.insertInquiry = (connection, registInfo) => {

  const { platformInquiryTitle, platformInquiryContent, platformInquiryDate, memberNo} = registInfo;

  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.insertInquiry(), [platformInquiryTitle, platformInquiryContent, platformInquiryDate, memberNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectInquiriesCount = (connection, memberNo) => {

  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.selectInquiriesCount(), [memberNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });

};

exports.selectInquiries = (connection, {memberNo, pageInfo}) => {
  
  pageInfo = JSON.parse(pageInfo);
  const startRow =  pageInfo.pageItemCount * (pageInfo.page - 1);
  const {pageItemCount} = pageInfo;

  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.selectInquiries(), [memberNo, startRow, pageItemCount], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      const inquiries = [];
      for(let i = 0; i < result.length; i++) {
        result[i].PLATFORM_INQUIRY_REPLY_NO === null ? result[i].PLATFORM_INQUIRY_REPLY_NO = 'N': result[i].PLATFORM_INQUIRY_REPLY_NO = 'Y';
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

      result[0] && result[0].PLATFORM_INQUIRY_REPLY_NO === null ? result[0].PLATFORM_INQUIRY_REPLY_NO = 'N': result[0].PLATFORM_INQUIRY_REPLY_NO = 'Y';

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

  const startRow = pageInfo.pageItemCount * (pageInfo.page - 1);
  const pageItemCount = pageInfo.pageItemCount;

  return new Promise((resolve, reject) => {
    connection.query(InquiryQuery.selectAllInquiries(), [startRow, pageItemCount], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      const inquiries = [];
      for(let i = 0; i < result.length; i++) {
        result[i].PLATFORM_INQUIRY_REPLY_NO === null ? result[i].PLATFORM_INQUIRY_REPLY_NO = 'N': result[i].PLATFORM_INQUIRY_REPLY_NO = 'Y';
        inquiries.push(new InquiryDTO(result[i]));
      }

      resolve(inquiries); 
    });
  });
};

exports.selectAllInquiriesCounts = (connection) => {

  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.selectAllInquiriesCounts(), (err, result, fields) => {
      
      if(err) {
        reject(err);
      }

      resolve(result[0].COUNT);
    });
  });
};

exports.updateReply = (connection, reply) => {

  return new Promise((resolve, reject) => {

    const { platfomrInquiryReplyNo, platfomrInquiryReplyContent} = reply;
    connection.query(InquiryQuery.updateReply(), [platfomrInquiryReplyContent, platfomrInquiryReplyNo], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.insertReply = (connection, replyInfo) => {
  
  const { replyDate, replyContent, inquiryNo } = replyInfo;
  
  return new Promise((resolve, reject) => {

    connection.query(InquiryQuery.insertReply(), [replyContent, replyDate, inquiryNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
    
  });
};
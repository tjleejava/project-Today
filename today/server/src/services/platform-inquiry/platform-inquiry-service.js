const getConnection = require('../../database/connection');
const InquiryRepo = require('../../repositories/platform-inquiry/inquiry-repo');

exports.registInquiry = (registInfo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InquiryRepo.insertInquiry(connection, registInfo);

    connection.end();

    resolve(result);
  });
};

exports.findInquiries = (findInfo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const countResult = await InquiryRepo.selectInquiriesCount(connection, findInfo.memberNo);
    const result = await InquiryRepo.selectInquiries(connection, findInfo);

    connection.end();

    resolve({inquiries: result, count: countResult});
  });
};

exports.findInquiry = (inquiryNo) => {

  return new Promise( async (resolve, reject) => {
    
    const connection = getConnection();

    const inquiryResult = await InquiryRepo.selectInquiry(connection,inquiryNo);

    const replyResult = await InquiryRepo.selectInquiryReply(connection,inquiryNo);
    
    connection.end();

    resolve( {
      inquiry: inquiryResult,
      reply: replyResult
    });

  });
};

exports.findAllInquiries = (pageInfo) => {
  
  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InquiryRepo.selectAllInquiries(connection, pageInfo);
    const countResult = await InquiryRepo.selectAllInquiriesCounts(connection);
    
    connection.end();

    pageInfo.totalItemsCount = countResult;
    
    resolve({
      inquiries: result,
      adminInquiriesPagingInfo: pageInfo
    });
  });
};

exports.modifyReply = (reply) => {

  return new Promise( async (resolve, reject) => {
    const connection = getConnection();

    const result = await InquiryRepo.updateReply(connection, reply);

    connection.end();

    resolve(reply);
  });
};

exports.registReply = (replyInfo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InquiryRepo.insertReply(connection, replyInfo);

    connection.end();

    resolve(result);
  });
};
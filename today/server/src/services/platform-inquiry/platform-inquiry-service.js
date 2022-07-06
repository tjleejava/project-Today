const getConnection = require('../../database/connection');
const InquiryRepo = require('../../repositories/platform-inquiry/inquiry-repo');

exports.registInquiry = (registInfo) => {

  console.log('service registInfo : ', registInfo);
  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InquiryRepo.insertInquiry(connection, registInfo);

    connection.end();

    resolve(result);
  });
};

exports.findInquiries = (memberNo) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await InquiryRepo.selectInquiries(connection, memberNo);

    connection.end();

    resolve(result);
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

    connection.end();

    resolve(result);
  });
};
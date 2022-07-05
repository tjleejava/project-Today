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
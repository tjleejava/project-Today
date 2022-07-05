const InquiryQuery = require('../../database/platform-inquiry/inquiry-query');
const InquiryDTO = require('../../dto/platform-inquiry/platform-inquiry');

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
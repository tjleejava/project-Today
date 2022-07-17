const memberQuery = require('../../database/member/member-query');
const MemberDTO = require('../../dto/member/member-dto');

exports.insertMember = (connection, data) => {

  return new Promise((resolve, reject) => {

    console.log(data);

    const memberRole = 'ROLE_USER';
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;
    const enrollDate = dateString;
    console.log(dateString);

    connection.query(memberQuery.insertMember()
    ,[data.email, data.password, data.nickname, enrollDate]
    ,(err, results, fields) => {
      if(err) {
        reject(err);
      }

      resolve(results);
    });
  });
};

exports.selectId = (connection, data) => {

  console.log(data);
  
  return new Promise((resolve, reject) => {
    connection.query(memberQuery.selectId(), [data.email], (err, results, fields) => {

      if(err) {
        reject(err);
      }

      console.log('아아아아아', results.length);
    
      resolve(results.length);
    })
  })
}














exports.selectById = (connection, data) => {

  return new Promise((resolve, reject) => {

    connection.query(memberQuery.selectById(), [data.email], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result.length == 0? null: new MemberDTO(result));
    });
  });
}
const memberQuery = require('../../database/member/member-query');
const MemberDTO = require('../../dto/member/member-response-dto')

exports.selectMemberById = async(connection, id) => {

  return new Promise((resolve, reject) => {
    connection.query(memberQuery.selectId(), [id], (err, results, fields) => {

      if(err) {
        console.log(err)
        reject(err);
      }

      console.log(`결과다 : ${JSON.stringify(results)}`);
      console.log(results[0]);

      if(results[0] !== undefined) {
        const member = new MemberDTO(results[0]);
        resolve(member);
      } else if(results[0] === undefined) {
        console.log('일치하는 결과가 없습니다.')
        resolve(null);
      }
          
      
    })
  })
}

exports.resetPassword = (connection, hashedData) => {

  return new Promise((resolve, reject) => {
    connection.query(memberQuery.resetPassword(), [hashedData.hashPwd, hashedData.id], (err, results, fields) => {
      if (err) {
        reject(err);
      }

      resolve(results);
    });
  })
}
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

      // console.log('아아아아아', results.length);
    
      resolve(results.length);
    })
  })
}

exports.insertToken = (connection, tokenData) => {

  return new Promise((resolve, reject) => {
    connection.query(memberQuery.insertToken(), [tokenData.memberNo, tokenData.token], (err, results, fields) => {
      if(err) {
        reject(err);
      }

      resolve(results);
    })
  })
}
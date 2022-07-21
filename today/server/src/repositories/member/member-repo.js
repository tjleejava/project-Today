const memberQuery = require('../../database/member/member-query');
const ChallengeArrayDTO = require('../../dto/challenge/challengeArray-dto');
const MemberDTO1 = require('../../dto/member/member-dto');
const MemberDTO = require('../../dto/member/member-response-dto');
const MypageChallengeDTO = require('../../dto/mypage/mypage-challenge-dto');


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

exports.selectById = (connection, data) => {

  return new Promise((resolve, reject) => {

    connection.query(memberQuery.selectById(), [data.email], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result.length == 0? null: new MemberDTO1(result));
    });
  });
}

exports.insertToken = (connection, tokenData) => {

  return new Promise((resolve, reject) => {
    connection.query(memberQuery.insertToken(), [tokenData.memberNo, tokenData.token], (err, results, fields) => {
      resolve(results);
    })
  })
};

exports.selectChallengeByMemberNo = (connection, memberNo) => {

  return new Promise((resolve, reject) => {
    connection.query(memberQuery.selectChallengeByMemberNo(), [memberNo],
    (err, results, fields) => {
      if(err) {
        reject(err);
      }
      console.log('REPO')
      console.log(results);
      const challengeInfoArray = [];
      if(results !== undefined) {
        for(i = 0; i < results.length; i++) {
          const challenge = new ChallengeArrayDTO(results[i]);
          challengeInfoArray.push(challenge);
        }
        console.log('챌린지 정보 확인')
        console.log(challengeInfoArray);
        resolve(challengeInfoArray);
      }else if(results === undefined){
        console.log('일치하는 결과가 없습니다.')
        resolve(null);
      }
      
    })
  })
}

exports.selectChallengesByMemberNo = (connection, memberNo) => {
  
  return new Promise((resolve, reject) => {
    connection.query(memberQuery.selectChallengesByMemberNo(), [memberNo],
    (err, results) => {
      if(err) {
        reject(err);
      }

      console.log('REPO')
      const allChallengeInfo = [];
      if(results !== undefined) {
        for(i = 0; i < results.length; i++) {
          const challenge = new MypageChallengeDTO(results[i]);
          allChallengeInfo.push(challenge);
          
      }
      console.log(allChallengeInfo)
      resolve(allChallengeInfo);
    }
  })
  })

  }


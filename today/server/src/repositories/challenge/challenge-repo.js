const challengeQuery = require('../../database/challenge/challenge-query');
const ChallengeRegistDTO = require('../../dto/challenge/challenge-regist-dto');
const AuthDayDTO = require('../../dto/challenge/challenge-auth-freq-dto');
const ChallengeDTO = require('../../dto/challenge/challenge-dto');
const AttachmentDTO = require('../../dto/challenge/challenge-attachment-dto');
const ChallengeListDTO = require('../../dto/challenge/ranking-dto');

exports.selectAttachmentByChallengeNo = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.selectAttachmentByChallengeNo(), [challengeNo], (err, result, fields) => {
      if(err) {
       
        reject(err);
      }
      
      let attachments = [];
      for(let i = 0; i < result.length; i++) {
        attachments.push(new AttachmentDTO(result[i]));
      }

      resolve(attachments);
    });
  });
};

exports.selectAuthDayByChallengeNo = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.selectAuthDayByChallengeNo(), [challengeNo], (err, result, fields) => {
      
      if(err) {
        reject(err);
      }
      let authDays = [];
      for(let i = 0; i< result.length; i++) {
        authDays.push(new AuthDayDTO(result[i]));
      }

      resolve(authDays);
    });
  });

};

exports.selectParticipationByMemberNo = (connection, authInfo) => {

  const {memberNo, challengeNo} = authInfo;

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.selectParticipationByMemberNo(), [memberNo, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectParticipationCount = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.selectParticipationCount(), [challengeNo], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
}

exports.selectChallengeByNo = (connection, challengeNo) => {
  
  return new Promise((resolve, reject) => {
    connection.query(challengeQuery.selectChallengeByNo(), [challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      console.log(result);
      const value = new ChallengeDTO(result);
      resolve(value);
    });
  });

};

exports.insertChallenge = (connection, registInfo) => {
  
  const { title, startDate, term, scope, category,memberNo, description, info, amount, freq, startTime, endTime } = registInfo;

  return new Promise((resolve, reject) => {
    connection.query(challengeQuery.insertChallenge(), 
    [title, startDate, term, scope, category, memberNo, amount, 1, description, info, freq, startTime, endTime], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
}

exports.insertChallengeAttachment = (connection, inputFile) => {

  const { originalName, savedName, savedPath , challengeNo, type} = inputFile;

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.insertChallengeAttachment(),
    [type ,originalName, savedName, savedPath, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.insertChallengeFreqDay = (connection, authFreqDay) => {

  const { dayNo, challengeNo } = authFreqDay;

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.insertChallengeFreqDay(),
    [dayNo, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectRankings = (connection) => {

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectRankings(), [], (err, results, fields) => {

      if(err) {
        reject(err);
      }

      let rankings = [];
      for(let i = 0; i< results.length; i++) {
        rankings.push(new ChallengeListDTO(results[i]));
      }

      resolve(rankings);
    });
  });
};

exports.selectByCategoryNo = (connection, categoryNo) => {

  return new Promise( async (resolve, reject) => {

    
    connection.query(challengeQuery.selectByCategoryNo(), [categoryNo], (err, results, fields) => {
      if(err) {
        reject(err);
      }
      console.log(categoryNo);
      console.log(results);
      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new ChallengeListDTO(results[i]));
      }
      resolve(challenges);
    });
  });
};

exports.selectAllChallengeCount = (connection) => {

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectAllChallengeCount(), [], (err, result, fields) => {
      if(err) {
        reject(err);
      }
      console.log(result[0].count);
      resolve(result[0].count);
    });
  });
};

exports.selectAllChallengeCountBySearchValue = (connection, searchValue) => {

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectAllChallengeCountBySearchValue(), ['%' + searchValue + '%'], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};

exports.selectChallengeCount =(connection, category) => {
  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectChallengeCount(), [parseInt(category)], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};

exports.selectChallengeCountBySearchValue = (connection, pageInfo) => {

  const {searchValue, category} = pageInfo;
  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectChallengeCountBySearchValue()
                    , [parseInt(category), '%' + searchValue + '%']
                    , (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].count);
    });
  });
};

exports.selectAllChallenge = (connection, pageInfo) => {
  const startRow =  pageInfo.pageItemCount * (pageInfo.page - 1);
  const pageItemCount = pageInfo.pageItemCount;

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectAllChallenge(), [startRow, pageItemCount], (err, results, fields) => {
      if(err) {
        reject(err);
      }

      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new ChallengeListDTO(results[i]));
      }

      resolve(challenges);
    });
  });
};

exports.selectAllChallengeBySearchValue = (connection, pageInfo) => {

  const {pageItemCount, searchValue} = pageInfo;
  const startRow =  pageItemCount * (pageInfo.page - 1);

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectAllChallengeBySearchValue()
                    ,['%' + searchValue + '%', startRow, pageItemCount]
                    ,(err, results, fields) => {
      if(err) {
        reject(eerr);
      }

      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new ChallengeListDTO(results[i]));
      }

      resolve(challenges);
    });
  });
};

exports.selectChallenge = (connection, pageInfo) => {
  
  const {pageItemCount, category} = pageInfo;
  const startRow =  pageItemCount * (pageInfo.page - 1);

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectChallenge(), [parseInt(category), startRow, pageItemCount], (err, results, fields) => {
      if(err) {
        reject(err);
      }

      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new ChallengeListDTO(results[i]));
      }

      resolve(challenges);
    });
  }); 
};

exports.selectChallengeBySearchValue = (connection, pageInfo) => {
  
  const {pageItemCount, searchValue, category} = pageInfo;
  const startRow =  pageItemCount * (pageInfo.page - 1);

  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.selectChallengeBySearchValue()
                    , [parseInt(category), '%' + searchValue + '%', startRow, pageItemCount]
                    , (err, results, fields) => {
      if(err) {
        reject(err);
      }

      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new ChallengeListDTO(results[i]));
      }

      resolve(challenges);
    });
  }); 
};
const challengeQuery = require('../../database/challenge/challenge-query');
const ChallengeRegistDTO = require('../../dto/challenge/challenge-regist-dto');
const AuthDayDTO = require('../../dto/challenge/challenge-auth-freq-dto');
const ChallengeDTO = require('../../dto/challenge/challenge-dto');
const AttachmentDTO = require('../../dto/challenge/challenge-attachment-dto');
const RankingDTO = require('../../dto/challenge/ranking-dto');

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

      const value = new ChallengeDTO(result);
      resolve(value);
    });
  });

};

exports.insertChallenge = (connection, registChallenge) => {

  const { title, startDate, term, scope, category, description, info, amount, freq, startTime, endTime } = registChallenge;

  return new Promise((resolve, reject) => {
    connection.query(challengeQuery.insertChallenge(), 
    [title, startDate, term, scope, category, 1, amount, 1, description, info, freq, startTime, endTime], (err, result, fields) => {

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
        rankings.push(new RankingDTO(results[i]));
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

      let challenges = [];
      for(let i = 0; i< results.length; i++) {
        challenges.push(new RankingDTO(results[i]));
      }
      resolve(challenges);
    });
  });
};
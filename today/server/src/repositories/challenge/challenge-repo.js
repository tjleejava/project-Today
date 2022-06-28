const challengeQuery = require('../../database/challenge/challenge-query');
const ChallengeRegistDTO = require('../../dto/challenge/challenge-regist-dto');


exports.insertChallenge = (connection, registChallenge) => {
  const { title, startDate, term, scope, category, description, info, amount } = registChallenge;
  console.log('repo layer');
  console.log('repo registChallenge : ', registChallenge);
  return new Promise((resolve, reject) => {
    connection.query(challengeQuery.insertChallenge(), 
    [title, startDate, term, scope, category, 1, amount, 1, description, info], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      console.log('repo layer print result : ');
      console.log(result);
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

  console.log(authFreqDay);
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
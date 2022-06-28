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

exports.insertChallengeAttachment = (connection, registAttachment, challengeNo, type) => {

  const { originalName, savedName, savedPath } = registAttachment;

  return new Promise((resolve, reject) => {

    console.log('type : ', type + 1);
    connection.query(challengeQuery.insertChallengeAttachment(),
    [type + 1 ,originalName, savedName, savedPath, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });


};
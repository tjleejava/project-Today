const challengeQuery = require('../../database/challenge/challenge-query');
const ChallengeRegistDTO = require('../../dto/challenge/challenge-regist-dto');
const AuthDayDTO = require('../../dto/challenge/challenge-auth-freq-dto');
const ChallengeDTO = require('../../dto/challenge/challenge-dto');
const AttachmentDTO = require('../../dto/challenge/challenge-attachment-dto');
const ChallengeListDTO = require('../../dto/challenge/ranking-dto');
const ParticipationDTO = require('../../dto/report/participation-dto');
const ChallengeInquiryDTO = require('../../dto/challenge/challenge-inquiry/challenge-inquiry-dto');

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
      console.log(result)
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

exports.insertParticipation = (connection, registInfo, challengeNo) => {

  const { registTime, memberNo } = registInfo;
  return new Promise( async (resolve, reject) => {

    connection.query(challengeQuery.insertParticipation(), [memberNo, challengeNo, registTime], (err, result, fields) => {

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

exports.findChallengeParticipation = (connection, data) => {
  console.log('find Participation')
  return new Promise( async (resolve, reject) => {
    connection.query(challengeQuery.findChallengeParticipation()
    , [data.memberNo, data.challengeNo], (err, results, fields) => {
      if(err) {
        reject(err);
      }
      console.log('findChallengeParticipation 조회결과')
      console.log(results[0]);
      if(results[0] === undefined) {
        const NOT_PARTICIPATE = null;
        resolve(NOT_PARTICIPATE);
      } else {
        resolve(results)
      }
    })
  })
  
}

exports.insertParticipateMemberInChallenge = (connection, data) => {
  console.log('repo')
  return new Promise( async (resolve, reject) => {
    connection.query(challengeQuery.insertParticipateMemberInChallenge()
    , [data.memberNo, data.challengeNo], (err, results, fields) => {
      if(err) {
        reject(err);
      }
      console.log(results);
      resolve(results);
    })
  })
}

exports.deleteChallengeByAdmin = (connection, challengeNo, categoryNo) => {

  return new Promise( async (resolve, reject) => {
    connection.query(challengeQuery.deleteChallengeByAdmin(), [categoryNo, challengeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectParticipations = (connection, challengeNo) => {

  return new Promise(async (resolve, reject) => {

    connection.query(challengeQuery.selectParticipations(), [challengeNo], (err, results, fields) => {
      if(err) {
        reject(err);
      }
      const participations = [];
      for(let i = 0; i < results.length; i++) {
        participations.push(new ParticipationDTO(results[i]));
      }

      resolve(participations);
    });
  });
};

exports.updateParticipationStatus = (connection, {no, statusNo}) => {
  
  return new Promise(async (resolve, reject) => {
    connection.query(challengeQuery.updateParticipationStatus(), [statusNo, no], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.insertParticipationHistory = (connection, {no, categoryNo, date}) => {
  
  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.insertParticipationHistory(), [no, categoryNo, date], (err, result, fields) => {

      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};


exports.insertAlarm = (connection, { memberNo, categoryNo, content, date }) => {

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.insertAlarm(), [categoryNo, memberNo, content, date], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(err);
    });
  });
};


exports.modifyChallenge = (connection, challenge) => {
  
  const { challengeAuthExplan, challengeInfo, startTime, endTime, challengeNo } = challenge;
 
  return new Promise((resolve, reject) => {
    
    connection.query(challengeQuery.modifyChallenge(), [ challengeAuthExplan, challengeInfo, startTime, endTime, challengeNo ], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.updateChallengeAttachment = (connection, {challengeNo, typeNo, fileInfo}) => {
  
  const {originalName, savedName, savedPath } = fileInfo;

  return new Promise((resolve, reject) => {

    connection.query(challengeQuery.updateChallengeAttachment(), [originalName, savedName, savedPath, challengeNo, typeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(result);
    });
  });
};

exports.selectChallengeAtachment = (connection, {challengeNo, typeNo}) => {

  return new Promise((resolve,reject) => {
    connection.query(challengeQuery.selectChallengeAtachment(), [challengeNo, typeNo], (err, result, fields) => {
      if(err) {
        reject(err);
      }

      resolve(new AttachmentDTO(result[0]));
    });
  });
};

exports.selectParticipationByMemberNoAndChallengeNo = (connection, {challengeNo, memberNo}) => {
  return new Promise((resolve,reject) => {
    connection.query(challengeQuery.selectParticipationByMemberNoAndChallengeNo(), [challengeNo, memberNo], (err, result, fields) =>{
      if(err) {
        reject(err);
      }

      resolve(result[0].PARTICIPATION_NO);
    });
  });
};

exports.selectParticipationNo = (connection, challengeNo, memberNo) => {

  return new Promise((resolve,reject) => {
    connection.query(challengeQuery.selectParticipationNo(), [challengeNo, memberNo], (err, result) => {
      if(err) {
        reject(err);
      }

      resolve(result[0].PARTICIPATION_NO);
    })
  })
}

exports.insertInquiry = (connection, registInfo) => {

  return new Promise((resolve,reject) => {
    connection.query(challengeQuery.insertInquiry(), [registInfo.title, registInfo.content, registInfo.participationNo],(err, result) => {
      if(err) {
        reject(err);
      }

      console.log(result);
      if(result.affectedRows == 1) {
        const data={
          status: 200,
          message: 'successfully insert inquiry',
          result: result.insertId
        }
        resolve(data);
      }
    }
    )
  })
}

exports.selectInquiries = (connection, challengeNo) => {

  return new Promise((resolve, reject) => {
    connection.query(challengeQuery.selectInquiries(), [challengeNo], (err, result) => {
      if(err) {
        reject(err);
      }

      console.log(result);
      const challengeInquiries = [];
      for(let i = 0; i < result.length; i++) {
        challengeInquiries.push(new ChallengeInquiryDTO(result[i]));
      }
      console.log(challengeInquiries);
      resolve(challengeInquiries);
    })
  })
}

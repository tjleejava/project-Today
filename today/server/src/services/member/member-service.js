require("dotenv").config();

const getConnection = require('../../database/connection');
const MemberRepository = require('../../repositories/member/member-repo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { request } = require('express');
const { database } = require('../../config/db-config');
const httpStatus = require('http-status');

exports.login = async (req, res) => {

  const id = req.id;
  const pwd = req.password;
  console.log(req.id);
  console.log(req.password);

  const match = await bcrypt.compare(pwd, DBPwd);
  console.log(match);

  const connection = getConnection();
  // const member = await (MemberRepository.selectMemberById(connection, id));
  const memberNo = member.memberNo;

  console.log(member);

  if (member == null) {
    // user does not exist
    throw new Error('login failed')
  } else if (member !== null) {

    const DBPwd = member.memberPwd;
    console.log(DBPwd);
    console.log(pwd);

    //첫번째 매개변수가 사용자가 입력한 패스워드


    // respond the token
    if (match === true) {
      const newToken = await generateToken
      await console.log('token :', newToken);
      
      return newToken

    }

  }
}

exports.findMemberById = (id) => {
  return new Promise((resolve, reject) => {

    const connection = getConnection();

    MemberRepository.selectMemberById(connection, id)
    .then((res) => {
      console.log('service', res)
      const ID_NONEXIST = null;
      if(res === ID_NONEXIST) {
        const data = {
          status: 204,
          message: '존재하지 않는 아이디 입니다.'
        }
        resolve(data)
      } else if(res != ID_NONEXIST) {
        const data = {
          status: 200,
          message: '존재하는 아이디 입니다.',
          response: res
        }
        resolve(data);
      }
    })
  })
}

exports.modifyPassword = (data) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const hashPassword = await bcrypt.hash(data.pwd, 12);

    const hashedData = {
      ...data, hashPwd: hashPassword
    }

    console.log(hashPassword);

    MemberRepository.resetPassword(connection, hashedData)
    .then((res) => {
      console.log(`ResetPwd Service Result : ${JSON.stringify(res)}`)
      let resetResult = parseInt(res.changedRows);

      if(resetResult === 1) {
        console.log('성공했다')
        const success = {
          status: 200,
          message: '비밀번호 수정 성공',
          response: res
        }
        resolve(success);
        } else {
        console.log('실패했다.')
      }
    });

    
    connection.end();

  })
}

exports.registMember = (data) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const hashPassword = await bcrypt.hash(data.password, 12);

    console.log(hashPassword);

    data.password = hashPassword;

    const results = MemberRepository.insertMember(connection, data);

    connection.end();

    resolve(results);
  });
};

exports.findId = (email) => {

  return new Promise((resolve, reject) => {
    
    const connection = getConnection();

    const results = MemberRepository.selectId(connection, email);

    connection.end();

    resolve(results);

  });

};


exports.checkEmail = (email) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const result = await MemberRepository.selectById(connection, email);
    connection.end();

    resolve(result);
  });
};

exports.findMemberByNo = (memberNo) => {
  return new Promise(async(resolve, reject) => {

    const connection = getConnection();

    const participationResult = await MemberRepository.selectChallengeByMemberNo(connection, memberNo);
    console.log('service')
    console.log(participationResult)
    resolve(participationResult);
    
  })
};

exports.findChallenges = (memberNo) => {
  return new Promise(async(resolve, reject) => {

    const connection = getConnection();
    const result = await MemberRepository.selectChallengesByMemberNo(connection, memberNo);
    console.log('SERVICE');
    resolve(result);
  })
}

exports.findPassword = async(data) => {

  const connection = getConnection();
  const hashPassword = await bcrypt.hash(data.pwd, 12);

  const hashedData = {
    ...data, hashPwd: hashPassword
  }
  console.log(hashedData)

  return new Promise(async(resolve, reject) => {

    const result = await MemberRepository.selectPassword(connection, data);

    const match = await bcrypt.compare(data.pwd, result.MEMBER_PWD);

    console.log(match);

    if(match == true) {
      const data = {
        status: httpStatus.OK,
        message: '비밀번호 일치'
      }
      resolve(data);
    } else if(match == false) {
      const data = {
        status: httpStatus.NO_CONTENT,
        message: '비밀번호 불일치'
      }
      resolve(data);
    }

  });
}

exports.modifyPasswordByMemberNo = (data) => {

  return new Promise( async (resolve, reject) => {

    const connection = getConnection();

    const hashPassword = await bcrypt.hash(data.pwd, 12);

    const hashedData = {
      ...data, hashPwd: hashPassword
    }

    console.log(hashPassword);

    MemberRepository.updatePasswordByMemberNo(connection, hashedData)
    .then((res) => {
      console.log(`ResetPwd Service Result : ${JSON.stringify(res)}`)
      let resetResult = parseInt(res.changedRows);

      if(resetResult === 1) {
        console.log('성공했다')
        const success = {
          status: httpStatus.OK,
          message: '비밀번호 수정 성공',
          response: res
        }
        resolve(success);
        } else {
          const fail = {
            status: httpStatus.CONFLICT,
            message: '비밀번호 수정 실패',
            response: res
          }
          resolve(fail);
      }
    });

    
    connection.end();

  })
}
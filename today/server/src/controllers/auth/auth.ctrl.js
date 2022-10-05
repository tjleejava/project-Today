
const getConnection = require('../../database/connection')
const MemberRepository = require('../../repositories/member/member-repo')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { request } = require('express');
require("dotenv").config();

exports.login = async(req, res) => {
  const { id, pwd } = req.body;
  const connection = getConnection();
  console.log("auth.ctrl: ", id, pwd);

  //id, password 없으면 에러 처리
  if(!id || !pwd) {
    return res.status(401).json({
    message: '잘못된 정보'
  }); //Unauthorized
  }
  try {
    let user = await (MemberRepository.selectMemberById(connection, id));
    const match = await checkPassword(user, pwd);
    console.log(match)
    
    if(!user) {
      return res.status(401).json({
        message: '잘못된 정보'
      });
    } else if(match === false) {        //잘못된 비밀번호
      return res.status(401).json({
      message: '비밀번호 오류'
      });
    } else {
      const accessToken = generateToken(user);
      console.log(accessToken);
      //express response cookie
      res.cookie('token', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,   //7일
        httpOnly: true,
      });
      delete user.memberPwd;

      res.status(200).send({
        message: '로그인 성공',
        user: user
      })
    }  
  } catch (e) {
    console.log(e);
    throw new Error('잘못된 로그인');

  }

}

exports.check = (req, res) => {
  const token = req.cookies.token;
  console.log('check 실행');
  console.log(token);
  let decoded;

  if(token != undefined) {
    decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
  console.log(decoded);
  
  if(!decoded || decoded == undefined) {
    //로그인 중 아님
    res.status(401).json({
      message: 'Unauthorized'
    });
  }
  return res.status(200).json({
    message: 'check 성공',
    user: decoded
  })
}

exports.logout = async(req, res) => {
  res.cookie('token','',{maxAge:0});
  return res.status(204).send({
    message: 'logout'
  })
  

}

function checkPassword(user, pwd) {
  const DBPwd = user.memberPwd;
  const match = bcrypt.compare(pwd, DBPwd);

  return match

}

function generateToken(user) {
  const accessToken = jwt.sign({
    type: "JWT",
    no: user.memberNo,
    id: user.memberId,
    nickname: user.nickname,
    enrollDate: user.enrollDate,
    memberRole: user.memberRole
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: '7d',
    issuer: 'today'
  });
  return accessToken;
}
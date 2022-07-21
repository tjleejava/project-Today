require("dotenv").config();
const axios = require('axios');
const {smtpTransport} = require('../../config/email');
const MemberService = require('../../services/member/member-service');
const HttpStatus = require('http-status');
const cookieParser = require('cookie-parser');
const express = require('express');
const { request } = require('express');

const app = express();
app.use(cookieParser());


exports.check = (req, res) => {
  console.log(req);
  return res.status(200).json({
    code: 200,
    message: "토큰이 정상입니다."
  });
}

exports.login = async(req, res) => {

  console.log(req.body);
  const memberId = req.body.id;
  const memberPwd = req.body.pwd;
  console.log(`memberId: ${memberId}`);
  console.log(`memberPwd: ${memberPwd}`);

  const loginMember = {id: memberId, password: memberPwd};

  console.log(loginMember);

  const response = await MemberService.login(loginMember)
  .catch(console.error)

  await console.log('controller : ', response);

  res.cookie('token', response, {})
  console.log(res.cookie('token'))
  return res.status(200).json({
    code: 200,
    message: "토큰이 정상입니다.",
    token: response
  });
}

exports.logout = async(req, res) => {
  console.log(req.cookies)
  return res.clearCookie('token');
}
/* ============================= 이메일 인증 ================================= */
/* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */ 
let generateRandom = function (min, max) {
  let ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}

exports.sendEmail = async(req, res) => {
    const number = generateRandom(111111,999999)

    const sendEmail = req.query.email;

    console.log('Controller 확인', sendEmail);

    const mailOptions = {
        from: '오늘하루',
        to: sendEmail,
        subject: "오늘하루 인증 이메일 입니다",
        text: "오른쪽 숫자 6자리를 입력해주세요 : " + number
    };

    const result = await smtpTransport.sendMail(mailOptions, (error, responses) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.OK).send({status: HttpStatus.BAD_REQUEST, message: '이메일 인증 실패'})
        } else {
          /* 클라이언트에게 인증 번호를 보내서 사용자가 맞게 입력하는지 확인! */
            return res.status(HttpStatus.OK)
            .send(
              {
                status: HttpStatus.OK,
                message: '이메일 인증 전송 성공',
                response: {
                number: number
                }
              })
        }
        smtpTransport.close();
    });
}

const resetPwdEmail = async(email, randomPassword) => {

  const mailOptions = {
    from: '오늘하루',
    to: email,
    subject: "오늘하루 비밀번호 초기화 이메일 입니다.",
    text: "오른쪽 숫자 6자리로 로그인 해주세요 : " + randomPassword
  };

  return new Promise( (resolve, reject) => {
    smtpTransport.sendMail(mailOptions, (error, responses) => {
    if (error) {
        console.log(error);
        reject({status: HttpStatus.BAD_REQUEST, message: '이메일 인증 실패'});
    } else {
      /* 클라이언트에게 인증 번호를 보내서 사용자가 맞게 입력하는지 확인! */
      resolve(
        {
          status: HttpStatus.OK,
          message: '이메일 전송 성공',
          response: {
            randomPassword: randomPassword
          }
        })
    }
    smtpTransport.close();
  })
  });
}

function generateRandomPassword() {
  return Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart("0", 8);
}

exports.registMember = async (req, res, next) => {

  const data = req.body;
  const results = await MemberService.registMember(data);

  console.log(req.body);
  console.log(`res : ${res}`);
  
  return res.status(HttpStatus.OK).json({
    status: HttpStatus.OK,
    message: 'successfully regist member',
    results: results
  });
};

exports.resetPassword = async (req, res, next) => {
  const email = req.body.email;
  const randomPassword = generateRandomPassword();
  
  const data = {
    id: email,
    pwd: randomPassword
  }

  MemberService.findMemberById(email)
  .then((findResult) => {
    const ID_EXIST = 200;
    console.log('controller', findResult)
    console.log(findResult.status)

    if(findResult.status == ID_EXIST) {
      resetPwdEmail(email, randomPassword)
        .then((resetPwdEmailResult) => {
          console.log(resetPwdEmailResult)
          MemberService.modifyPassword(data)
            .then(
              (serviceRes) => {
                console.log(serviceRes)
                return res.status(HttpStatus.OK).json({
                  status: HttpStatus.OK,
                  message: '비밀번호 초기화성공',
                  results: serviceRes
                })
              }
            )
            .catch((err) => console.log(err))
        })
    } else {
      console.log('컨트롤러 아이디 존재하지않는거 확인')
      return res.status(HttpStatus.NO_CONTENT).json({
        status: HttpStatus.NO_CONTENT,
        message: '존재하지 않는 아이디'
      })
    }
  });
  
  console.log(email, randomPassword);
}

exports.findId = async (req, res, next) => {

  console.log(req.query);

  const email = req.query;

  const results = await MemberService.findId(email);

  if(results === 0) {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: '사용가능하다',
      results: results
    })
  } else{
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: '중복됐다',
      results: results
    });
  }
  
};

exports.findMemberByNo = async (req, res, next) => {
  console.log('controller')

  const memberNo = req.query.memberNo;
  console.log(memberNo);

  const result = await MemberService.findMemberByNo(memberNo);
  return res.send(
              {
                status: HttpStatus.OK,
                message: '프로필 조회 성공',
                response: result
              })
};

exports.checkEmailExist = async (req, res, next) => {
  const result = await MemberService.checkEmail(req.query);

  console.log(result);
  if(result != null) {
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      isExists: true,
      memberInfo: result
    })
  } else{
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      isExists: false,
      memberInfo: result
    });
  }
};

exports.findChallenges = async (req, res, next) => {
  const memberNo = req.query.memberNo;
  const result = await MemberService.findChallenges(memberNo);

  return res.send(
    {
      status: HttpStatus.OK,
      message: '마이페이지 챌린지 조회 성공',
      response: result
    })
}

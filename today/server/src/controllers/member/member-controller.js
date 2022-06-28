const {smtpTransport} = require('../../config/email');
const MemberService = require('../../services/member/member-service');
const HttpStatus = require('http-status');

/* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */ 
var generateRandom = function (min, max) {
  var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
  return ranNum;
}

const auth = {
  SendEmail : async(req, res) => {
      const number = generateRandom(111111,999999)

      const { sendEmail } = req.body;

      const mailOptions = {
          from: "오늘하루",
          to: sendEmail,
          subject: "[오늘하루] 인증 관련 이메일 입니다",
          text: "오른쪽 숫자 6자리를 입력해주세요 : " + number
      };

      const result = await smtpTransport.sendMail(mailOptions, (error, responses) => {
          if (error) {
              return res.status(statusCode.OK).send(util.fail(statusCode.BAD_REQUEST, responseMsg.AUTH_EMAIL_FAIL))
          } else {
            /* 클라이언트에게 인증 번호를 보내서 사용자가 맞게 입력하는지 확인! */
              return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMsg.AUTH_EMAIL_SUCCESS, {
                  number: number
              }))
          }
          smtpTransport.close();
      });
  }
}

exports.registMember = async (req, res, next) => {

  const data = req.body;
  const results = await MemberService.registMember(data);

  console.log(req.body);
  console.log(`res : ${res}`);
  
  res.status(HttpStatus.OK).json({
    status: HttpStatus.OK,
    message: 'successfully regist member',
    results: results
  });
};

exports.findId = async (req, res, next) => {

  console.log(req);

  // console.log(email);
  // const results = await MemberService.findId(email);

  // res.status(HttpStatus.OK).json({
  //   status: HttpStatus.OK,
  //   message: 'successfully found member',
  //   results: results
  // });
};
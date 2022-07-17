const {smtpTransport} = require('../../config/email');
const MemberService = require('../../services/member/member-service');
const HttpStatus = require('http-status');

/* ============================= 이메일 인증 ================================= */
/* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */ 
var generateRandom = function (min, max) {
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

  console.log(req.query);

  const email = req.query;

  const results = await MemberService.findId(email);

  if(results === 0) {
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: '사용가능하다',
      results: results
    })
  } else{
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: '중복됐다',
      results: results
    });
  }
  

  
};











exports.checkEmailExist = async (req, res, next) => {
  const result = await MemberService.checkEmail(req.query);

  console.log(result);
  if(result != null) {
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      isExists: true,
      results: result
    })
  } else{
    res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      isExists: false,
      results: result
    });
  }
};
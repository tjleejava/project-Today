const jwt = require('jsonwebtoken');
const MemberRepository = require('../repositories/member/member-repo');

const jwtMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  console.log('jwtMiddleware 실행');
  console.log(token);

  if(!token) {
    console.log("토큰 없다")
    return next();
  } 
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    req.isLogin({
      message: '로그인 확인 성공',
      user: decoded
    })
    const now = Math.floor(Date.now() / 1000);
    if(decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user =  await (MemberRepository.selectMemberById(connection, id));
      const newToken = generateToken(user);
      res.cookie('token', newToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,   //7일
        httpOnly: true,
      });
    }
    return next();
  } catch (e) {
    return next();
  }

};

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

module.exports = jwtMiddleware;
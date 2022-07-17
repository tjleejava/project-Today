const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const MemberController = require('../controllers/member/member-controller');

/* DB를 활용하지 않을 예정이기 때문에 배열로 초기데이터를 입력한다. */
const memberDB = [
    { id: 'user01', password: 'pass01', name: '홍길동' },
    { id: 'user02', password: 'pass02', name: '유관순' },
    { id: 'user03', password: 'pass03', name: '이순신' },
];

router.post('/login', (req, res, next) => {

    const memberId = req.body.id;
    const memberPwd = req.body.password;

    const loginMember = memberDB
                        .filter(member => member.id === memberId)
                        .filter(member => member.password === memberPwd)[0];

    console.log(loginMember);

    const secret = 'SecreTKEy';
    if(loginMember) {

        jwt.sign(
            {
                memberId: loginMember.id,
                memberName: loginMember.name
            },
            secret,
            {
                expiresIn: '30m'
            },
            (err, token) => {
                if(err) {
                    console.log(err);
                    res.status(401).json({ success: false, message: '토큰 발급 실패!' });
                } else {
                    /* https://jwt.io/  여기서 확인 가능함 */
                    res.status(200).json({ success: true, accessToken: token });
                    // res.cookie('token', token);
                    // res.status(200).end();
                }
            }
        );
    } else {
        res.status(401).json({ success: false, message: '아이디 혹은 패스워드 불일치' });
    }

});
router.post('/', MemberController.registMember);

router.get('/idcheck', MemberController.findId);

router.get('/email', MemberController.sendEmail);

router.get('/checkEmail', MemberController.checkEmailExist);

module.exports = router;
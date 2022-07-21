const express = require('express');
const router = express.Router();
const MemberController = require('../controllers/member/member-controller');
const {verifyToken} = require('../middlewares/auth');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/auth');


router.post('/login', MemberController.login);

router.get('/logout', MemberController.logout);

router.get('/', MemberController.findMemberByNo);

router.post('/', MemberController.registMember);

router.get('/idcheck', MemberController.findId);

router.get('/email', MemberController.sendEmail);

router.get('/checkEmail', MemberController.checkEmailExist);

router.get('/check',verifyToken, MemberController.check);

router.post('/reset-pwd', MemberController.resetPassword);

router.get('/challenges', MemberController.findChallenges);

module.exports = router;
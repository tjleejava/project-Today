const express = require('express');
const router = express.Router();
const ChallengeController = require('../controllers/challenge/challenge-controller');

router.get('/', ChallengeController.findChallenges);
router.post('/', ChallengeController.registChallenge);
router.put('/',ChallengeController.modifyChallenge)
router.delete('/',ChallengeController.removeChallenge)
router.post('/upload', ChallengeController.uploadFile);
router.get('/rankings', ChallengeController.findRankings);
router.get('/checkAuth', ChallengeController.checkChallengeAuthByMemberNo);
router.put('/secession', ChallengeController.secessionChallenge);
router.get('/category/:categoryNo', ChallengeController.findByCategoryNo);
router.get('/:challengeNo', ChallengeController.findChallengeByNo);
router.post('/:challengeNo', ChallengeController.participateChallenge);
router.post('/:challengeNo/inquiries', ChallengeController.registInquiry);
router.get('/:challengeNo/inquiries', ChallengeController.findChallengeInquiries);
module.exports = router;
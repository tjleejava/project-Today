const express = require('express');
const router = express.Router();
const ChallengeController = require('../controllers/challenge/challenge-controller');

router.post('/', ChallengeController.registChallenge);
router.put('/',ChallengeController.modifyChallenge)
router.post('/upload', ChallengeController.uploadFile);
router.get('/test', ChallengeController.test);
router.put('/test1', ChallengeController.test1);
router.get('/:challengeNo', ChallengeController.findChallengeByNo);
module.exports = router;
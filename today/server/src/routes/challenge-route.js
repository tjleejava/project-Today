const express = require('express');
const router = express.Router();
const ChallengeController = require('../controllers/challenge/challenge-controller');

router.post('/', ChallengeController.registChallenge);
router.post('/upload', ChallengeController.uploadFile);
router.get('/test', ChallengeController.test);
router.get('/:challengeNo', ChallengeController.findChallengeByNo);
module.exports = router;
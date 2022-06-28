const express = require('express');
const router = express.Router();
const ChallengeController = require('../controllers/challenge/challenge-controller');

router.post('/', ChallengeController.registChallenge);
router.post('/upload', ChallengeController.uploadFile);

module.exports = router;
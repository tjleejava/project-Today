const express = require('express');
const router = express.Router();
// const ChallengeController = require('../controllers/challenge/challenge-controller');

router.get('/', ChallengeController.registChallenge);

module.exports = router;
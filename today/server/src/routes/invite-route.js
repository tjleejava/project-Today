const express = require('express');
const router = express.Router();
const InviteController = require('../controllers/invite/invite-controller');

router.post('/', InviteController.registInvite);

module.exports = router;
const express = require('express');
const router = express.Router();
const InviteController = require('../controllers/invite/invite-controller');

router.get('/', InviteController.findInvites);
router.post('/', InviteController.registInvite);
router.delete('/', InviteController.removeInvite);

module.exports = router;
const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth/auth.ctrl')

router.post('/login', authCtrl.login);

router.get('/check', authCtrl.check);

router.post('/logout', authCtrl.logout);

module.exports = router;
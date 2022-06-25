const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu/menu-controller');

router.get('/', MenuController.findAllMenus);

module.exports = router;
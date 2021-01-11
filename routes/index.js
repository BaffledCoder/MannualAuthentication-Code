const express = require('express');
const router = express.Router();
const homeController = require('../controller/home.js');
router.get('/', homeController.home);
// Both signin/signup page will be in auth so /auth/sign_in, /auth/sign_up
router.use('/auth', require('./auth.js'));
module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.js');
router.get('/sign_up', authController.sign_up);
router.get('/sign_in', authController.sign_in);
router.get('/profile', authController.profile);
router.post('/create', authController.create);
router.post('/create-session',authController.createSession);

module.exports = router;
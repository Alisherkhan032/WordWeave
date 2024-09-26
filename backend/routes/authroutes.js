const userController = require('../Controller/userController');
const express = require('express');
const User_model = require('../models/userModel');
const router = express.Router();

router.get('/login', userController.get_login);
router.get('/signup', userController.get_signup);

router.use(express.json());  // This parses incoming JSON requests
router.post('/login', userController.post_login);
router.post('/signup', userController.post_signup);

router.delete('/logout', userController.logout)

module.exports = router;
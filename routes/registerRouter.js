var express = require('express');
var router = express.Router();
const  upload  = require('../register');
const registerController = require('../controllers/registerController');
const { validateToken } = require('../middlewares/auth.js');

router.post('/upload', upload.single('img'), validateToken, registerController.register);

module.exports = {router};
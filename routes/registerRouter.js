var express = require('express');
var router = express.Router();
const  upload  = require('../register');
const registerController = require('../controllers/registerController');

router.post('/upload', upload.single('img'), registerController.register);

module.exports = {router};
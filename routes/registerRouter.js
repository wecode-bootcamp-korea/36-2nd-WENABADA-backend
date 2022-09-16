var express = require('express');
var router = express.Router();
const  upload  = require('../register');
const registerController = require('../controllers/registerController');
const errorHandler = require("../middlewares/errorHandler");

router.post('/upload', upload.single('img'), errorHandler(registerController.register));

module.exports = {router};
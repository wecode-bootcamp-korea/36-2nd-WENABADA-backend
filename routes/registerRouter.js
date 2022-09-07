var express = require('express');
var router = express.Router();
const  upload  = require('../register');
const registerController = require('../controllers/registerController');
const { application } = require("express");
// , upload.single('img')
router.post('/upload', upload.single('img'), registerController.register);

module.exports = {router};
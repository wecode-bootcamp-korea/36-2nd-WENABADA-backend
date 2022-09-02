const express = require('express');
const userController = require('../controllers/userController');
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.post('/login', errorHandler(userController.login));

module.exports = {
	router
}
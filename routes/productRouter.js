const express = require('express');
const productController = require('../controllers/productController');
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/random/list', errorHandler(productController.getProductRandomList))

router.get('/recommend/list', validateToken, errorHandler(productController.getProductRecommendList))

router.patch('/recent/watch/list', validateToken, errorHandler(productController.updateProductRecentWatchList))

router.get('/recent/watch/list', validateToken, errorHandler(productController.getProductRecentWatchList))

router.get('/like/number', validateToken, errorHandler(productController.getProductlikeNumber))

router.get('/search/list', errorHandler(productController.getProductSearchList))

module.exports = {
	router
}
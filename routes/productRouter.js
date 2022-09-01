const express = require('express');
const productController = require('../controllers/productController');
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require('../middlewares/auth.js');

const router = express.Router();

router.get('/random/list', errorHandler(productController.getProductRandomList))

router.get('/info', validateToken, errorHandler(productController.getProductInfo));

router.get('/recommend/list', validateToken, errorHandler(productController.getProductRecommendList))

router.patch('/recent/watch/list', validateToken, errorHandler(productController.updateProductRecentWatchList))

router.get('/recent/watch/list', validateToken, errorHandler(productController.getProductRecentWatchList))

router.get('/like/number', validateToken, errorHandler(productController.getProductlikeNumber))

router.get('/search/list', errorHandler(productController.getProductSearchList))

router.get('/info', validateToken, errorHandler(productController.getProductInfo));

router.get('/category', validateToken, errorHandler(productController.getProductCategoryInfo));

router.post('/like', validateToken,errorHandler(productController.addProductLike));

router.get('/relate', validateToken,errorHandler(productController.getRelateInfo));

router.get('/sidebar', validateToken,errorHandler(productController.getProductSidebarInfo));

router.get('/checklike', validateToken,errorHandler(productController.getCheckLikeInfo));

router.get('/seller/info', validateToken,errorHandler(productController.getSellerInfo));

router.get('/seller/product', validateToken,errorHandler(productController.getSellerProduct));

router.get('/seller/review', validateToken,errorHandler(productController.getSellerReview));

router.get('/relate', validateToken, errorHandler(productController.getRelateInfo));

router.get('/sidebar', validateToken, errorHandler(productController.getProductSidebarInfo));

router.get('/checklike', validateToken, errorHandler(productController.getCheckLikeInfo));

router.get('/seller/info', validateToken, errorHandler(productController.getSellerInfo));

router.get('/seller/product', validateToken, errorHandler(productController.getSellerProduct));

router.get('/seller/review', validateToken, errorHandler(productController.getSellerReview));

module.exports = { router };

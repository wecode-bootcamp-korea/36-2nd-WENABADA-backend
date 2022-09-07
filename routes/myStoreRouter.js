const express = require("express");
const myStoreController = require('../controllers/myStoreController');
const errorHandler = require("../middlewares/errorHandler");
const { validateToken } = require('../middlewares/auth.js');
const router = express.Router();

router.get('/', validateToken, errorHandler(myStoreController.getMyStoreInfo));

router.get('/product', validateToken, errorHandler(myStoreController.getMyStoreProductInfo));

router.get('/review', validateToken, errorHandler(myStoreController.getMyStoreReviewInfo));

router.get('/like', validateToken, errorHandler(myStoreController.getMyStoreLikeInfo));

router.get('/follower', validateToken, errorHandler(myStoreController.getMyStoreFollowerInfo));

router.get('/following', validateToken, errorHandler(myStoreController.getMyStoreFollowingInfo));

router.post('/follow', validateToken, errorHandler(myStoreController.follow));

module.exports = { router };
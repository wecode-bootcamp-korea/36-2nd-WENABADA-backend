const express = require("express");
const categoryController = require('../controllers/categoryController');
const errorHandler = require("../middlewares/errorHandler");
const router = express.Router();

router.get('/main',  errorHandler(categoryController.getFirstCategoryProductList));

router.get('/main/sub', errorHandler(categoryController.getSubCategoryProductList));

router.get('/main/sub/last', errorHandler(categoryController.getLastCategoryProductList));

router.get('/main/sub/last/filter', errorHandler(categoryController.getPriceFilterList));

router.get('/main/sub/last/new', errorHandler(categoryController.getNewDateList));

router.get('/main/filter', errorHandler(categoryController.getFirstCategoryPriceFilterList));

router.get('/main/new', errorHandler(categoryController.getFirstCategoryNewList));

module.exports = { router };
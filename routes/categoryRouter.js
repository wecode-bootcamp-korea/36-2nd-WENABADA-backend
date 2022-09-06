"use strict";

const express = require("express");
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.get('/main',  categoryController.getFirstCategoryProductList);

router.get('/main/sub', categoryController.getSubCategoryProductList);

router.get('/main/sub/last', categoryController.getLastCategoryProductList);

router.get('/main/sub/last/filter', categoryController.getPriceFilterList);

router.get('/main/sub/last/new', categoryController.getNewDateList);

router.get('/main/filter', categoryController.getFirstCategoryPriceFilterList);

router.get('/main/new', categoryController.getFirstCategoryNewList);

module.exports = { router };
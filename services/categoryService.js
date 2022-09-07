const categoryDao = require('../models/categoryDao');
const error = require("../middlewares/errorConstructor");

const getFirstCategoryProductList = async ( firstCategory, pageNo, limit ) => {
  const getFirstProduct = await categoryDao.getFirstCategoryProductList( firstCategory, pageNo, limit );
  if (getFirstProduct.length == 0) {
    throw new error('List Empty', 400)
  }
  return getFirstProduct;
}

const getSubCategoryProductList = async ( firstCategory, subCategory, pageNo, limit  ) => {
  const getSubProduct = await categoryDao.getSubCategoryProductList( firstCategory, subCategory, pageNo, limit  );
  if (getSubProduct.length == 0) {
    throw new error('List Empty', 400)
  }  
  return getSubProduct;
}

const getLastCategoryProductList = async (firstCategory, subCategory, lastCategory, pageNo, limit ) => {
  const getLastProduct = await categoryDao.getLastCategoryProductList(firstCategory, subCategory, lastCategory, pageNo, limit );
  if (getLastProduct.length == 0) {
    throw new error('List Empty', 400)
  }    
  return getLastProduct;
}

const getPriceFilterList = async (firstCategory, subCategory, lastCategory, pageNo, limit, option ) => {
  const getFilter = await categoryDao.getPriceFilterList(firstCategory, subCategory, lastCategory, pageNo, limit, option );
  if (getFilter.length == 0) {
    throw new error('List Empty', 400)
  }    
  return getFilter;
}

const getNewDateList = async (firstCategory, subCategory, lastCategory, pageNo, limit, option ) => {
  const getNewDate = await categoryDao.getNewDateList(firstCategory, subCategory, lastCategory, pageNo, limit, option );
  if (getNewDate.length == 0) {
    throw new error('List Empty', 400)
  }  
  return getNewDate;
}

const getFirstCategoryPriceFilterList = async (firstCategory, pageNo, limit, option ) => {
  const getFilter = await categoryDao.getFirstCategoryPriceFilterList(firstCategory, pageNo, limit, option );
  if (getFilter.length == 0) {
    throw new error('List Empty', 400)
  }  
  return getFilter;
}

const getFirstCategoryNewList = async (firstCategory, pageNo, limit, option ) => {
  const getNew = await categoryDao.getFirstCategoryNewList(firstCategory, pageNo, limit, option );
  if (getNew.length == 0) {
    throw new error('List Empty', 400)
  }  
  return getNew;
}

module.exports = {
  getFirstCategoryProductList,
  getSubCategoryProductList,
  getLastCategoryProductList,
  getPriceFilterList,
  getNewDateList,
  getFirstCategoryPriceFilterList,
  getFirstCategoryNewList,
}
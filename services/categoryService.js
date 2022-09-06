const categoryDao = require('../models/categoryDao');

const getFirstCategoryProductList = async ( firstCategory, pageNo, Limit ) => {
  const getFirstProduct = await categoryDao.getFirstCategoryProductList( firstCategory, pageNo, Limit );
  if (getFirstProduct.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }
  return getFirstProduct;
}

const getSubCategoryProductList = async ( firstCategory, subCategory, pageNo, Limit  ) => {
  const getSubProduct = await categoryDao.getSubCategoryProductList( firstCategory, subCategory, pageNo, Limit  );
  if (getSubProduct.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }  
  return getSubProduct;
}

const getLastCategoryProductList = async (firstCategory, subCategory, lastCategory, pageNo, Limit ) => {
  const getLastProduct = await categoryDao.getLastCategoryProductList(firstCategory, subCategory, lastCategory, pageNo, Limit );
  if (getLastProduct.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }    
  return getLastProduct;
}

const getPriceFilterList = async (firstCategory, subCategory, lastCategory, pageNo, Limit, option ) => {
  const getFilter = await categoryDao.getPriceFilterList(firstCategory, subCategory, lastCategory, pageNo, Limit, option );
  if (getFilter.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }    
  return getFilter;
}

const getNewDateList = async (firstCategory, subCategory, lastCategory, pageNo, Limit, option ) => {
  const getNewDate = await categoryDao.getNewDateList(firstCategory, subCategory, lastCategory, pageNo, Limit, option );
  if (getNewDate.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }  
  return getNewDate;
}

const getFirstCategoryPriceFilterList = async (firstCategory, pageNo, Limit, option ) => {
  const getFilter = await categoryDao.getFirstCategoryPriceFilterList(firstCategory, pageNo, Limit, option );
  if (getFilter.length == 0) {
    const err = new Error ('List Empty')
    throw err
  }  
  return getFilter;
}

const getFirstCategoryNewList = async (firstCategory, pageNo, Limit, option ) => {
  const getNew = await categoryDao.getFirstCategoryNewList(firstCategory, pageNo, Limit, option );
  if (getNew.length == 0) {
    const err = new Error ('List Empty')
    throw err
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
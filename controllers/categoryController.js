const categoryService = require('../services/categoryService');
const err = require('../middlewares/errorHandler1')

const errorFunc = (value, str) => {
  const error = new Error(str);
  error.statusCode = value;
  throw error;
}

const getFirstCategoryProductList = async (req, res) => {
  try {
    const  { firstCategory, pageNo, Limit }  = req.query;
    const getFirstCategoryProductList = await categoryService.getFirstCategoryProductList( firstCategory, pageNo, Limit );
    res.status(200).json(getFirstCategoryProductList);
  }
  catch (err) {
    res.status(400).json({"message" : err.message});
  }
}

const getSubCategoryProductList = async (req, res) => {
  try{
    const { firstCategory, subCategory, pageNo, Limit  }  = req.query;
    const getSubCategoryProductList = await categoryService.getSubCategoryProductList( firstCategory, subCategory, pageNo, Limit  );
    res.status(200).json(getSubCategoryProductList);
  }
  catch (err) {
    res.status(400).json({"message" : err.message});
  }
}

const getLastCategoryProductList = async (req, res) => {
  try{
    const { firstCategory, subCategory, lastCategory, pageNo, Limit  }  = req.query;
    const getLastCategoryProductList = await categoryService.getLastCategoryProductList(firstCategory, subCategory, lastCategory, pageNo, Limit );
    res.status(200).json(getLastCategoryProductList);
  }
  catch (err) {
    res.status(400).json({"message" : err.message});
  }
}

const getPriceFilterList = async (req,res) => {
  try{
    const { firstCategory, subCategory, lastCategory, pageNo, Limit, option  } = req.query;
    const getPriceFilter = await categoryService.getPriceFilterList(firstCategory, subCategory, lastCategory, pageNo, Limit, option );
    res.status(200).json(getPriceFilter);
  } catch (err) {
    res.status(400).json({"message" : err.message});
  }
}

const getNewDateList = async (req,res) => {
  try{
    const { firstCategory, subCategory, lastCategory, pageNo, Limit, option  } = req.query;
    const getNewDateList = await categoryService.getNewDateList(firstCategory, subCategory, lastCategory, pageNo, Limit, option );
    res.status(200).json(getNewDateList);
  } catch (err) {
    res.status(400).json({"message" : err.message});
  }
}

const getFirstCategoryPriceFilterList = async (req,res) => {
  try{
    const { firstCategory, pageNo, Limit, option  } = req.query;
    const getFirstCategoryPriceFilterList = await categoryService.getFirstCategoryPriceFilterList(firstCategory, pageNo, Limit, option );  
    res.status(200).json(getFirstCategoryPriceFilterList);
  } catch (err) {
    res.status(400).json({"message" : err.message});
    }
}

const getFirstCategoryNewList = async (req,res) => {
  try{
    const { firstCategory, pageNo, Limit, option  } = req.query;
    const getFirstCategoryNewList = await categoryService.getFirstCategoryNewList(firstCategory, pageNo, Limit, option );  
    res.status(200).json(getFirstCategoryNewList);
  } catch (err) {
    res.status(400).json({"message" : err.message});
    }
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
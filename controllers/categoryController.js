const categoryService = require('../services/categoryService');

const getFirstCategoryProductList = async (req, res) => {
    const  { firstCategory, pageNo, limit }  = req.query;
    const getFirstCategoryProductList = await categoryService.getFirstCategoryProductList( firstCategory, pageNo, limit );
    res.status(200).json(getFirstCategoryProductList);
}

const getSubCategoryProductList = async (req, res) => {
    const { firstCategory, subCategory, pageNo, limit  }  = req.query;
    const getSubCategoryProductList = await categoryService.getSubCategoryProductList( firstCategory, subCategory, pageNo, limit  );
    res.status(200).json(getSubCategoryProductList);
}

const getLastCategoryProductList = async (req, res) => {
    const { firstCategory, subCategory, lastCategory, pageNo, limit  }  = req.query;
    const getLastCategoryProductList = await categoryService.getLastCategoryProductList(firstCategory, subCategory, lastCategory, pageNo, limit );
    res.status(200).json(getLastCategoryProductList);
}

const getPriceFilterList = async (req,res) => {
    const { firstCategory, subCategory, lastCategory, pageNo, limit, option  } = req.query;
    const getPriceFilter = await categoryService.getPriceFilterList(firstCategory, subCategory, lastCategory, pageNo, limit, option );
    res.status(200).json(getPriceFilter);
}

const getNewDateList = async (req,res) => {
    const { firstCategory, subCategory, lastCategory, pageNo, limit, option  } = req.query;
    const getNewDateList = await categoryService.getNewDateList(firstCategory, subCategory, lastCategory, pageNo, limit, option );
    res.status(200).json(getNewDateList);
}

const getFirstCategoryPriceFilterList = async (req,res) => {
    const { firstCategory, pageNo, limit, option  } = req.query;
    const getFirstCategoryPriceFilterList = await categoryService.getFirstCategoryPriceFilterList(firstCategory, pageNo, limit, option );  
    res.status(200).json(getFirstCategoryPriceFilterList);
}

const getFirstCategoryNewList = async (req,res) => {
    const { firstCategory, pageNo, limit, option  } = req.query;
    const getFirstCategoryNewList = await categoryService.getFirstCategoryNewList(firstCategory, pageNo, limit, option );  
    res.status(200).json(getFirstCategoryNewList);
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
const productService = require('../services/productService');
const error = require("../middlewares/errorConstructor");
const eNum = require('../models/eNum');

const getProductRandomList = async (req, res) => {
    const productRandomList = await productService.getProductRandomList();
    res.status(200).json({productRandomList : productRandomList})
};

const getProductRecommendList = async (req, res) => {
    const mainId = req.body.decoded.id;
    const productRecommendList = await productService.getProductRecommendList(mainId);
    res.status(200).json({productRecommendList : productRecommendList})
};

const updateProductRecentWatchList = async (req, res) => {
    const mainId = req.body.decoded.id;
    const { productId } = req.body;
    if(!productId){
        throw new error("KEY_ERROR", 400);
    }
    await productService.updateProductRecentWatchList(productId, mainId);
    res.status(201).json({ message: "product_updated" });
}

const getProductRecentWatchList = async (req, res) => {
    const mainId = req.body.decoded.id;
    const productRecentWatchList = await productService.getProductRecentWatchList(mainId);
    res.status(200).json({productRecentWatchList : productRecentWatchList})
};

const getProductlikeNumber = async (req, res) => {
    const mainId = req.body.decoded.id;
    const productlikeNumber = await productService.getProductlikeNumber(mainId);
    res.status(200).json({productlikeNumber : productlikeNumber})
};

const getProductSearchList = async (req, res) => {
    const query = req.query
    const productSearchList = await productService.getProductSearchList(query);
    res.status(200).json({productSearchList : productSearchList})
};

const getProductInfo = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;
  const getProductInfo = await productService.getProductInfo(id, userId);
  res.status(200).json(JSON.parse(Object.values(getProductInfo[0])));
}


const getProductCategoryInfo = async (req, res) => {
  const { id } = req.query
  const getProductInfo = await productService.getProductCategoryInfo( id );
  res.status(200).json(JSON.parse(Object.values(getProductInfo[0])));
}

const addProductLike = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;

  const addProductLike = await productService.addProductLike( id, userId );
  if( addProductLike == eNum.Exists ) {
  res.status(200).json({"message":"SUCCESS_ADD"});
  } else res.status(200).json({"message":"SUCCESS_DELETE"});
}

const getCheckLikeInfo = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;
  const getCheckLikeInfo = await productService.getCheckLikeInfo(id, userId);
  if( getCheckLikeInfo == eNum.Exists) {
  res.status(200).json({"message" : "TRUE"});
  } else res.status(200).json({"message" : "FALSE"});
} 

const getSellerInfo = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;
  const getSellerInfo = await productService.getSellerInfo( id, userId );
  res.status(200).json(getSellerInfo);
} 

const getSellerProduct = async (req, res) => {
  const { id } = req.query
  const getSellerProduct = await productService.getSellerProduct( id );
  res.status(200).json(getSellerProduct);
  } 


const getSellerReview = async (req, res) => {
  const { id } = req.query
  const getSellerReview = await productService.getSellerReview( id );
  res.status(200).json(getSellerReview);
  } 

const getProductSidebarInfo = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;
  const getSidebarInfo = await productService.getSidebarInfo(  id,userId  )
  res.status(200).json( getSidebarInfo)
} 

const getRelateInfo = async (req, res) => {
  const { id } = req.query;
  const userId = req.body.decoded.id;
  const getRelateInfo = await productService.getRelateInfo( id, userId )
  res.status(200).json(getRelateInfo)
}

module.exports = {
  getProductInfo,
  getProductCategoryInfo,
  addProductLike,
  getSellerInfo,
  getSellerProduct,
  getSellerReview,
  getProductSidebarInfo,
  getRelateInfo,
  getCheckLikeInfo,
  getProductRandomList, 
  getProductRecommendList, 
  updateProductRecentWatchList, 
  getProductRecentWatchList, 
  getProductlikeNumber, 
  getProductSearchList
}
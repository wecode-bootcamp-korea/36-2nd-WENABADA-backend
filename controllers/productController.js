const productService = require('../services/productService');
const error = require("../middlewares/errorConstructor");

const getProductRandomList = async (req, res) => {
    const productRandomList = await productService.getProductRandomList();
    res.status(200).json({productRandomList : productRandomList})
};

const getProductRecommendList = async (req, res) => {
    const userId = req.body.decoded.social_id;
    const productRecommendList = await productService.getProductRecommendList(userId);
    res.status(200).json({productRecommendList : productRecommendList})
};

const updateProductRecentWatchList = async (req, res) => {
    const userId = req.body.decoded.social_id;
    const { productId } = req.body;
    if(!productId){
        throw new error("KEY_ERROR", 400);
    }
    await productService.updateProductRecentWatchList(productId, userId);
    res.status(201).json({ message: "product_updated" });
}

const getProductRecentWatchList = async (req, res) => {
    const userId = req.body.decoded.social_id;
    const productRecentWatchList = await productService.getProductRecentWatchList(userId);
    res.status(200).json({productRecentWatchList : productRecentWatchList})
};

const getProductlikeNumber = async (req, res) => {
    const mainId = req.body.decoded.id
    const productlikeNumber = await productService.getProductlikeNumber(mainId);
    res.status(200).json({productlikeNumber : productlikeNumber})
};

const getProductSearchList = async (req, res) => {
    const query = req.query
    const productSearchList = await productService.getProductSearchList(query);
    res.status(200).json({productSearchList : productSearchList})
};

module.exports = {
    getProductRandomList, getProductRecommendList, updateProductRecentWatchList, getProductRecentWatchList, getProductlikeNumber, getProductSearchList
}    
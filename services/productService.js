const productDao = require('../models/productDao')

const getProductRandomList = async () => {
    const productRandomList = await productDao.getProductRandomList()
    return productRandomList;
};

const getProductRecommendList = async (userId) => {
    const userLikeCategory = await productDao.getUserLikeCategory(userId)
    if(userLikeCategory.length === 0){
        userLikeCategory.push({tertiary_categories_id : 1})
    }
    const categoryId = userLikeCategory[0].tertiary_categories_id
    const productRecommendList = await productDao.getProductRecommendList(categoryId)
    return productRecommendList;
};

const updateProductRecentWatchList = async(productId, userId) => {
    const productRecentWatchList = await productDao.updateProductRecentWatchList(productId, userId);
    return productRecentWatchList
}

const getProductRecentWatchList = async (userId) => {
    const productRecentWatchList = await productDao.getProductRecentWatchList(userId)
    return productRecentWatchList;
};

const getProductlikeNumber = async (mainId) => {
    const productlikeNumber = await productDao.getProductlikeNumber(mainId)
    return productlikeNumber;
};

const getProductSearchList = async (query) => {
    const values = Object.values(query)
    const productSearchList = await productDao.getProductSearchList(values)
    return productSearchList;
};

module.exports = {
    getProductRandomList, getProductRecommendList, updateProductRecentWatchList, getProductRecentWatchList, getProductlikeNumber, getProductSearchList
}
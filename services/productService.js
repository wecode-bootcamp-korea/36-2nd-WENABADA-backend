const productDao = require('../models/productDao')

const getProductRandomList = async () => {
    let randomLimit = 11
    const productRandomList = await productDao.getProductRandomList(randomLimit)
    return productRandomList;
};

const getProductRecommendList = async (mainId) => {
    const userLikeCategory = await productDao.getUserLikeCategory(mainId)
    if(userLikeCategory.length === 0){
        userLikeCategory.push({tertiary_categories_id : 1})
    }
    const categoryId = userLikeCategory[0].tertiary_categories_id
    const productRecommendList = await productDao.getProductRecommendList(categoryId)
    return productRecommendList;
};

const updateProductRecentWatchList = async(productId, mainId) => {
    const productRecentWatchList = await productDao.updateProductRecentWatchList(productId, mainId);
    return productRecentWatchList
}

const getProductRecentWatchList = async (mainId) => {
    const productRecentWatchList = await productDao.getProductRecentWatchList(mainId)
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
    getProductRandomList, 
    getProductRecommendList, 
    updateProductRecentWatchList, 
    getProductRecentWatchList, 
    getProductlikeNumber, 
    getProductSearchList
}
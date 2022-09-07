const productDao = require('../models/productDao')
const eNum = require('../models/eNum');

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

const getProductInfo = async (id, userId) => {
  await productDao.updateRecentView(id, userId);
  const getInfo = await productDao.getProductInfo(id, userId);
  return getInfo;
}

const getProductCategoryInfo = async (id) => {
  const getCategoryInfo = await productDao.getProductCategoryInfo(id);
  return getCategoryInfo;
}

const addProductLike = async (id, userId) => {
  const checkLike = await productDao.checkLike(id, userId);
  const checkResult = await Number(Object.values(checkLike[0])[0]);
  if( checkResult === eNum.notExists) {
    await productDao.addLike(id, userId);
    return eNum.Exists;
  } 
  await productDao.deleteLike(id, userId);
  return eNum.notExists;
}

const getSellerInfo = async(id, userId) => {
  const getInfo = await productDao.getSellerInfo( id, userId );
  if(getInfo.length == eNum.notExists){
    const err = new Error('SELLER_NOT_EXIST')
    throw err
  }
  return getInfo;
}

const getSellerProduct = async(id) => {
  const getProduct = await productDao.getSellerProduct( id );
  const getResult = JSON.parse(Object.values(getProduct[0]));
  return getResult;
}

const getSellerReview = async(id) => {
  const getReview = await productDao.getSellerReview( id );
  const getResult = JSON.parse(JSON.stringify(Object.values(getReview[0])));

  if(getResult[0] == null) {
    const err = new Error('REVIEW_NOT_EXIST')
    throw err
  }
  const result = JSON.parse(Object.values(getReview[0]))
  return result;
}

const getSidebarInfo = async (  id,userId ) => {
  const getSide = await productDao.getSidebarInfo( id, userId )
  const getResult = JSON.parse(Object.values(getSide[0]));
  return getResult;
}

const getRelateInfo = async ( id ) => {
  const checkCategory = await productDao.getProductCategoryInfo(id);
  const result = JSON.parse(Object.values(checkCategory[0])[0])
  if(result == null ) {
    const err = new Error('RELATE_PRODUCT_NOT_EXIST')
    throw err
  }
  const firstCategory = Object.values(result[0])[0];
  const lastCategory = Object.values(result[0])[1];
  const subCategory = Object.values(result[0])[2];
  const getRelate = await productDao.getRelateInfo( id , firstCategory, subCategory, lastCategory)
  return getRelate;
}

const getCheckLikeInfo = async ( id, userId ) => {
  const selectSocial = await productDao.getSocialInfo( userId );
  const result = Number(Object.values(selectSocial[0])[0]);

  const checkLike = await productDao.getCheckLikeInfo (id, result );
  const results = await Number(Object.values(checkLike[0])[0]);

  return results
}

module.exports = {
  getProductInfo,
  getProductCategoryInfo,
  addProductLike,
  getSellerInfo,
  getSellerProduct,
  getSellerReview,
  getSidebarInfo,
  getRelateInfo,
  getCheckLikeInfo,
  getProductRandomList, 
  getProductRecommendList, 
  updateProductRecentWatchList, 
  getProductRecentWatchList, 
  getProductlikeNumber, 
  getProductSearchList,
}

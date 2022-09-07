const myStoreDao = require('../models/myStoreDao');
const eNum = require('../models/eNum');

const getMyStoreInfo = async (userId) => {
  const getInfo = await myStoreDao.getMyStoreInfo(userId);
  if ( getInfo[0].shop_info === null ) {
    const err = new Error('NOT_EXIST_STORE')
    throw err
  }
  return getInfo;
}

const follow = async (userId, followId) => {
  const checkFollow = await myStoreDao.checkFollow(userId, followId);
  const checkResult = await Number(Object.values(checkFollow[0])[0]);
  if( checkResult === eNum.notExists) {
    const addLike = await myStoreDao.addFollow(userId, followId);
    return eNum.Exists;
  } 
  const deleteLike = await myStoreDao.deleteFollow(userId, followId);
  return eNum.notExists;
}

const getMyStoreProductInfo = async (userId) => {
  const getProductInfo = await myStoreDao.getMyStoreProductInfo(userId);
  if (getProductInfo[0].product === null) {
    const err = new Error('NOT_EXIST_PRODUCT');
    throw err
  }
  return getProductInfo;
}

const getMyStoreReviewInfo = async (userId) => {
  const getReviewInfo = await myStoreDao.getMyStoreReviewInfo(userId);
  if (getReviewInfo[0].review === null) {
    const err = new Error('NOT_EXIST_REVIEW');
    throw err
  }
  return getReviewInfo;
}

const getMyStoreLikeInfo = async (userId) => {
  const getLikeInfo = await myStoreDao.getMyStoreLikeInfo(userId);
  if (getLikeInfo[0].likes === null) {
    const err = new Error('NOT_EXIST_LIKE');
    throw err
  }
  return getLikeInfo;
}

const getMyStoreFollowerInfo = async (userId) => {
  const getFollowerInfo = await myStoreDao.getMyStoreFollowerInfo(userId);
  return getFollowerInfo;
}

const getMyStoreFollowingInfo = async (userId) => {
  const getFollowingInfo = await myStoreDao.getMyStoreFollowingInfo(userId);
  if (getFollowingInfo[0].following === null) {
    const err = new Error('NOT_EXIST_LIKE');
    throw err
  }
  return getFollowingInfo;
}

module.exports = {
  getMyStoreInfo,
  getMyStoreProductInfo,
  getMyStoreReviewInfo,
  getMyStoreLikeInfo,
  getMyStoreFollowerInfo,
  getMyStoreFollowingInfo,
  follow,
}
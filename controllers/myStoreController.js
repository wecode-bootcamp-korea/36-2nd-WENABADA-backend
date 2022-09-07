const myStoreService = require('../services/myStoreService');
const eNum = require('../models/eNum')

const getMyStoreInfo = async (req, res) => {
    const userId = req.decoded.id;
    const getMyStoreInfo = await myStoreService.getMyStoreInfo(userId);
    res.status(200).json({"shopInfo" : JSON.parse(Object.values(getMyStoreInfo[0]))});
  }

const follow = async (req, res) => {
  const { followId } = req.query;
  const userId = req.decoded.id;
  const follow = await myStoreService.follow(userId, followId);
  if( follow == eNum.Exists ) {
  res.status(200).json({"message":"SUCCESS_ADD"});
  } else res.status(200).json({"message":"SUCCESS_DELETE"});
} 

const getMyStoreProductInfo = async (req, res) => {
  const userId = req.decoded.id;
    const getMyStoreProductInfo = await myStoreService.getMyStoreProductInfo(userId);
    res.status(200).json({"myStoreProduct" : JSON.parse(Object.values(getMyStoreProductInfo[0]))});
}

const getMyStoreReviewInfo = async (req, res) => {
  const userId = req.decoded.id;
  const getMyStoreReviewInfo = await myStoreService.getMyStoreReviewInfo(userId);
  res.status(200).json({"myStoreReviewInfo" : JSON.parse(Object.values(getMyStoreReviewInfo[0]))});
}


const getMyStoreLikeInfo = async (req, res) => {
  const userId = req.decoded.id;
  const getMyStoreLikeInfo = await myStoreService.getMyStoreLikeInfo(userId);
  res.status(200).json({"myStoreLikeInfo" : JSON.parse(Object.values(getMyStoreLikeInfo[0]))});
}


const getMyStoreFollowerInfo = async (req, res) => {
  const userId = req.decoded.id;
  const getMyStoreFollowerInfo = await myStoreService.getMyStoreFollowerInfo(userId);
  res.status(200).json({"myStoreFollowerInfo" : JSON.parse(Object.values(getMyStoreFollowerInfo[0]))});
}


const getMyStoreFollowingInfo = async (req, res) => {
  const userId = req.decoded.id;
  const getMyStoreFollowingInfo = await myStoreService.getMyStoreFollowingInfo(userId);
  res.status(200).json({"myStoreFollowingInfo" : JSON.parse(Object.values(getMyStoreFollowingInfo[0]))});
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
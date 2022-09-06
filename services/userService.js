const userDao = require('../models/userDao')
const express = require('express');
const router = express.Router();
const error = require("../middlewares/errorConstructor");
const axios = require('axios')
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY; 

const login = async (kakaoToken) => {
    let user;
    user = await axios({
        method:"GET",
        url:'https://kapi.kakao.com/v2/user/me',
        headers:{
            Authorization:`Bearer ${kakaoToken}`
        }
    })
    const userId = user.data.id
    if(!userId){
        throw new error("KEY_ERROR", 400);
    }
    const idCheck = await userDao.idCheck(userId)
    if(Number(Object.values(idCheck[0])[0]) === 0){
        await userDao.createUser(userId)
    }
    const mainId = await userDao.checkMainId(userId)
    const payLoad = { id : mainId[0].id}
    const token = jwt.sign(payLoad, secretKey)
    return token
};
  
module.exports = {
    login, router
}
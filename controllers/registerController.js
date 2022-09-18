const registerService = require('../services/registerService');
const eNum = require('../models/eNum')

const register = async (req, res) => {
    let image_url = req.file.location
    let key = req.file.key;
    // console.log("check1", key)
    const {title, category, userId, address, price, description} = req.body;
    eval(`category1 = ${category}`)
    let lastCategory = category1[Object.keys(category1)[eNum.Last]];
    await registerService.productRegister(title, userId, price, description, address, image_url, lastCategory, key );
    res.status(200).json({"message": "REGISTER_SUCCESS"});
};

module.exports = {
	register,
}
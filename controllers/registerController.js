const registerService = require('../services/registerService');
const eNum = require('../models/eNum')

const register = async (req, res) => {
    let image_url = req.file.location
    const userId = req.decoded.id;
    const {title, category,  address, price, description} = req.body;
    eval(`category1 = ${category}`)
    let lastCategory = category1[Object.keys(category1)[eNum.Last]];
    await registerService.productRegister(title, userId, price, description, address, image_url, lastCategory );
    res.status(200).json({"message": "REGISTER_SUCCESS"});
};

module.exports = {
	register,
}
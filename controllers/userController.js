const userService = require('../services/userService');

const login = async (req, res) => {
    const kakaoToken = req.headers["authorization"];
    const userToken = await userService.login(kakaoToken);
    res.status(201).json({userToken : userToken})
};

module.exports = {
	login
}
const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const categoryRouter = require('./categoryRouter');
const myStoreRouter = require('./myStoreRouter');
const register = require("./registerRouter");

router.use('/shop', myStoreRouter.router);

router.use('/category', categoryRouter.router);

router.use('/products', productRouter.router);

router.use("/users", userRouter.router);

router.use("/register", register.router);

module.exports = router;

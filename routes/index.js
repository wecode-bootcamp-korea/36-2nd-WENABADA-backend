const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const categoryRouter = require('./categoryRouter');
const myStoreRouter = require('./myStoreRouter');

router.use("/users", userRouter.router);

router.use('/shop', myStoreRouter.router);

router.use('/category', categoryRouter.router);

router.use('/products', productRouter.router);

module.exports = router;

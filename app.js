const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const createApp = () => {
    const app = express();
    app.use(cors());
    app.use('/', router);
    app.use(express.json());
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    return app;
};

module.exports = { createApp };
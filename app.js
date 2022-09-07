const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const createApp = () => {
    const app = express();
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(cors());
    app.use(routes);
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    return app;
};

module.exports = { createApp };
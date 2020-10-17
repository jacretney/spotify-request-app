const express = require('express');
const cors = require('cors');
const SearchController = require('./api/v1/controllers/SearchController');
const app = express();

/**
 * Middleware
 */
app.use(cors());

/**
 * Routes => Controllers
 */
app.use(
    '/search', SearchController,
);

module.exports = app;

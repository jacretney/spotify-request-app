/**
 * SearchController
 *
 * /api/v1/search
 */

const express = require('express');
const Router = express.Router();

const AxiosSpotifyService = require('../../../../core/service/AxiosSpotifyService');

/**
 * @param {Request} req The request URL
 * @param {Response} res The response data
 */
Router.get('/', async (req, res) => {
  const result = await AxiosSpotifyService.search();
  res.json(result);
});

module.exports = Router;

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
  const query = req.query.q;
  const service = new AxiosSpotifyService();
  const result = await service.search(query);
  res.json(result);
});

module.exports = Router;

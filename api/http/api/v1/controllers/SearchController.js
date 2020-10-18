/**
 * SearchController
 *
 * /api/v1/search
 */

import express from 'express';
import AxiosSpotifyService from '../../../../core/service/AxiosSpotifyService';

const Router = express.Router();

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

export default Router;

/**
 * SearchController
 *
 * /api/v1/search
 */

const express = require('express');
const Router = express.Router();

/**
 * @param {Request} req The request URL
 * @param {Response} res The response data
 */
Router.get('/', async (req, res) => {
  res.json([
    {
      id: 1,
      title: "Masochist",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    },
    {
      id: 2,
      title: "Hypermania",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    },
    {
      id: 3,
      title: "Lucid",
      artist: "Polaris",
      img: "https://i.scdn.co/image/ab67616d00001e02fd9d0b51b8009920a7227d04"
    }
  ]);
});

module.exports = Router;

import express from 'express';
import cors from 'cors';
import SearchController from './api/v1/controllers/SearchController';

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

export default app;

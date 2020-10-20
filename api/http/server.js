import app from './app';

/**
 * Initialise server
 */

const PORT = process.env.PORT || 80;
app.listen(PORT);

export {};

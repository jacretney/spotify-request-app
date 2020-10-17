const app = require('./app');

/**
 * Initialise server
 */

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`API running on port ${PORT}...`));

const app = require('./app');
require('dotenv').config();

/**
 * Initialise server
 */

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`API running on port ${PORT}...`));

// Add ES6 polyfill.
// Makes the latest javascript features available in older browsers.
// Must be loaded in order, hence the `require()` instead of `import`.
require('bootstrap/dist/css/bootstrap.min.css');
require('@babel/polyfill');
require('./render');
require('dotenv').config();

export const DF_API_KEY = process.env.DF_API_KEY;
export const DF_URL = process.env.DF_URL;
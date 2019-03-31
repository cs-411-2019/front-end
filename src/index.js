// Add ES6 polyfill.
// Makes the latest javascript features available in older browsers.
// Must be loaded in order, hence the `require()` instead of `import`.
require('bootstrap/dist/css/bootstrap.min.css');
require('@babel/polyfill');
require('./render');
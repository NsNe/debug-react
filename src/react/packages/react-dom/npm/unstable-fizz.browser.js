'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-dom-unstable-fizz.browser.production.min.js');
} else {
  module.exports = require('./cjs/react-dom-unstable-fizz.browser.development.js');
}

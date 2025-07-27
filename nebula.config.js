const path = require('path');

module.exports = {
  build: {
    replacementStrings: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
  },
  serve: {
    flags: {
      FEATURE_NO_DEVTOOL: false,
    },
    build: false,
  },
}; 
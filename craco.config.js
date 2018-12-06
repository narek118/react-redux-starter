const path = require('path');

module.exports = {
  webpack: {
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      pages: path.resolve(__dirname, 'src/pages'),
      config: path.resolve(__dirname, 'src/config')
    }
  }
};

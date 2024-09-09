const path = require('path');
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

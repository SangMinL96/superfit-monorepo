const path = require('path');
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: ['ui'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

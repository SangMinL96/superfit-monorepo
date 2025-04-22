const path = require('path');
module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: ['@superfit/design', "@superfit/shared", "@superfit/type"],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

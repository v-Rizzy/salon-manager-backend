/* eslint-disable */
const path = require('path');
const moduleAlias = require('module-alias');

// Configure module-alias for production
if (process.env.NODE_ENV === 'production') {
  moduleAlias.addAlias('@src', path.join(__dirname, 'dist'));
}


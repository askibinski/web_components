const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    'my-element': './src/my-element.js',
    'my-template': './src/my-template.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
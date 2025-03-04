const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },
});
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


const buildWebpackConfig = merge(baseWebpackConfig, {
    optimization: {
        minimize: false
    },
    mode: 'production'

});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');


const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        host: '192.168.0.11',
        overlay: {
            warnings: true,
            errors: true
        },
        // historyApiFallback: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://project-mentor.ru',
        //         pathRewrite: {'^/api' : ''},
        //         changeOrigin: true,
        //         secure: false
        //     },
        // }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
});





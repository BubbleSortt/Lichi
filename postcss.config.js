// npm i -D postcss-loader cssnano css-mqpacker autoprefixer

module.exports = {
    plugins: [
        require('autoprefixer'),
       // require('css-mqpacker'),
        require('cssnano') ({
            preset: [
                'default', {
                discardComments: {
                    removeAll: true
                }
                }
            ]
        })
    ]
};
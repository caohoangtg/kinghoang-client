const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.TARGET_ENV': JSON.stringify('LIVE'),
            'process.env.PUBLIC_URL': JSON.stringify('http://localhost:8080/'),
            'process.env.BASE_URL': JSON.stringify('BASE_URL'),
        }),
    ],
}

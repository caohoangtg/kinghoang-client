const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.TARGET_ENV': JSON.stringify('LOCAL'),
            'process.env.PUBLIC_URL': JSON.stringify('http://localhost:8080/'),
            'process.env.BASE_URL': JSON.stringify('BASE_URL'),
        }),
    ],
}

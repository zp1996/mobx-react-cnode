const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
    entry,
    port,
    rootPath,
    outputPath,
    devtool,
    modules,
    resolve,
    plugins
} = require('../webpack.default.js');

module.exports = {
    entry: Object.assign(entry, {
        app: [
            `${rootPath}app/index.jsx`
        ]
    }),
    output: {
        filename: '[name].[chunkhash:8].js',
        path: outputPath,
        publicPath: '/'
    },
    devtool: devtool,
    module: modules,
    resolve,
    plugins: [
        new ExtractTextPlugin('bundle.[chunkhash:8].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            beautify: false
        }),
        ...plugins
    ]
};
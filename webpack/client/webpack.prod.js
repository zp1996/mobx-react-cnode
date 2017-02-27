const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
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
        publicPath: '/dist/'
    },
    devtool: devtool,
    module: modules,
    resolve,
    plugins: [
        new ExtractTextPlugin('bundle.[chunkhash:8].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            beautify: false
        }),
        new HtmlWebpackPlugin({ 
            template: `${rootPath}/app/index.ejs`,
            filename: `${rootPath}/index.ejs`,
            dom: '<%- html %>',
            title: '<%= title %>',
            store: '<%= store %>'
        }),
        ...plugins
    ]
};
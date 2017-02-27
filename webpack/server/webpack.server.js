const webpack = require('webpack'),
    fs = require('fs'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    rootPath,
    outputPath,
    devtool,
    modules,
    resolve,
    plugins
} = require('../webpack.default.js');

module.exports = {
    entry: './app',
    target: 'node',
    output: {
        path: rootPath,
        filename: 'ssr.js'
    },
    module: modules,
    resolve,
    node: {
        __dirname: true,
        __filename: true
    },
    externals: fs.readdirSync(path.resolve(rootPath, './node_modules')).concat([
        'react-dom/server',
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod;
        return ext;
    }, {}),
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('autoprefixer')]
            }
        }),
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({ 
            template: `${rootPath}/app/index.ejs`,
            filename: `${rootPath}/index.ejs`,
            dom: '<%- html %>',
            title: '<%= title %>'
        })
    ]
};
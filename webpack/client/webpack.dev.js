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

const apiPort = 2017;//require(`${rootPath}/server`);

module.exports = {
    entry: Object.assign(entry, {
        app: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            `${rootPath}app/index.dev.jsx`
        ]
    }),
    output: {
        filename: '[name].js',
        path: outputPath,
        publicPath: '/'
    },
    devtool,
    module: modules,
    resolve,
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.HotModuleReplacementPlugin(),
        ...plugins
    ],
    devServer: {
        contentBase: outputPath,
        compress: true,
        historyApiFallback: true,
        hot: true,
        port,
        proxy: {
            '/server': {
                target: `http://localhost:${apiPort}`
            }
        }
    }
};
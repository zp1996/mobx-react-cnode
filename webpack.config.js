const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    port = 9000,
    rootPath = path.join(__dirname, '/'),
    outputPath = path.join(rootPath, 'dist');

module.exports = {
    entry: {
        app: [ 
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            `${rootPath}app/index.jsx`
        ],
        vendor: [            
            'react',
            'react-dom',
            'react-router',
            'mobx',
            'mobx-react',
            "classnames"
        ]
    },
    output: {
        filename: '[name].js',
        path: outputPath,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'app/components/'),
            Containers: path.resolve(__dirname, 'app/containers/'),
            Styles: path.resolve(__dirname, 'app/components/styles/'),
            Stores: path.resolve(__dirname, 'app/stores/')
        }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({  
            classnames: 'classnames'
        }),
        new CleanWebpackPlugin([outputPath], {
                root: rootPath,
                verbose: true,
                dry: false
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('autoprefixer')]
            }
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ 
            template: `${rootPath}/app/index.html`
        })
    ],
    devServer: {
        contentBase: outputPath,
        compress: true,
        historyApiFallback: true,
        hot: true,
        port,
        proxy: {
            '/server': {
                target: 'http://localhost:2017',
                pathRewrite: {
                    "^/server": ""
                }
            }
        }
    }
};
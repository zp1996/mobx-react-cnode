const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    port = 9000,
    rootPath = path.join(__dirname, '../'),
    outputPath = path.join(rootPath, 'dist');

module.exports = {
    port,
    rootPath,
    outputPath, 
    entry: {
        vendor: [            
            'react',
            'react-dom',
            'react-router',
            'mobx',
            'mobx-react',
            "classnames"
        ]
    },
    modules: {
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
            Root: path.resolve(rootPath, 'app/'),
            Components: path.resolve(rootPath, 'app/components/'),
            Containers: path.resolve(rootPath, 'app/containers/'),
            Styles: path.resolve(rootPath, 'app/components/styles/'),
            Stores: path.resolve(rootPath, 'app/stores/')
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
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [require('autoprefixer')]
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ 
            template: `${rootPath}/app/index.html`
        })
    ]
};
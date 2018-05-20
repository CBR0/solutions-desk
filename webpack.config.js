const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'src'),
        port: 3000,
        filename: 'bundle.js',
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader", // compiles Sass to CSS
                                options: {
                                    includePaths: ['./node_modules']
                                }
                            }

                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'bundle.css', allChunks: true})
    ],
};
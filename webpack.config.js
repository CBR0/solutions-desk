const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // {
            //     test: /\.jsx?$/,
            //     use: ['babel-loader',],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        // use: [
                            // {
                            //     loader: 'file-loader',
                            //     options: {
                            //         name: 'bundle.css',
                            //     },

                            // },
                            // { loader: 'extract-loader' },
                            // { loader: 'css-loader' },
                            // {
                            //     loader: 'sass-loader',
                            //     options: {
                            //         includePaths: ['./node_modules']
                            //     }
                            // },
                        // ],
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
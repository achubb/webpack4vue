'use-strict'

const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',

    output: {
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader?name=[path][name].[ext]',
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ],
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {
            root: process.cwd()
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        })
        //new CopyWebpackPlugin([{
            //from: resolve('static/img'),
            //to: resolve('dist/img'),
            //toType: 'dir'
        //}])
    ]
}

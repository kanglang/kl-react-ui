
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入每次删除文件夹的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "example/src/index.js"),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: ["style-loader", 'css-loader']
        },
        {
            test: /\.scss$/,
            use: ["style-loader", 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'file-loader'
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "a mobile preview",
            template: path.join(__dirname, "example/src/index.html"),
            meta: {
                'viewport': 'width=device-width, user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover'
            }
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        contentBase: './dist'
    }
};
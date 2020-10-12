/*
 * @Author: kanglang
 * @Date: 2020-07-18 23:44:30
 * @LastEditors: kanglang
 * @LastEditTime: 2020-10-12 11:36:15
 * @Description: 开发自动化构建配置
 */

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
            use: [
                {
                    loader: "babel-loader"   //该loader会对js进行转换
                }
            ],
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
            use: 'url-loader'
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "kl-react-ui",
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
        // open:true,//自动打开浏览器 这里在package.json中配置 默认打开谷歌浏览器
        port: 3001,
        contentBase: './dist',
        hot: true,//启用热更新 第一步
        // proxy: {                    //代理属性
        //     "/api": {
        //         target: 'https://api-server.com',
        //         pathRewrite: { "^/api": "" }, // 如果你不想始终传递 /api ，则需要重写路径
        //         /* 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的
        //         所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '' */
        //         secure: false  //默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器
        //     }
        // }
    }
};
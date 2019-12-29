const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "example/src/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: "babel-loader",
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: ["style-loader", 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: '[name].[hash].[ext]'
            }
        }]
    },
    externals: {
        react: 'react' //打包时候排除react
    },
    externals: [
        {
            react: 'react' //打包时候排除react
        },
        nodeExternals()]
    ,
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        contentBase: './dist'
    }
};
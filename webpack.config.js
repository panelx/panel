var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: './*.html'
        }])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['react-hot-loader', 'babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.(jpg|png|svg|eot|woff|woff2|ttf|gif)$/,
                loader: 'file-loader?name=[path][name].[hash].[ext]'
            }
        ]
    }
};

const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    output: {
        filename: '[hash].bundle.js',
    },
    resolve: {
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader',
            },
            {
                test: /\.(vert|frag)$/,
                use: 'raw-loader',
            },
        ],
    },
    stats: 'minimal',
    devtool: 'source-map',
    performance: {
        hints: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: true,
            WEBGL_RENDERER: true,
        }),
        new HtmlWebpackPlugin({
            // favicon: 'src/img/favicon.ico',
            // template: 'src/index.html',
        }),
    ],
    devServer: {
        // listening on port 3000
        port: 3000,
        stats: 'minimal',
    },
};

module.exports = config;
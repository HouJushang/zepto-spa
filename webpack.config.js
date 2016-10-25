var webpack = require('webpack')
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }
}
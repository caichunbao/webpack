const webpack = require('webpack')
const path = require('path')
const MyPluginName = require('./plugin/myPlugin.js')

module.exports = {
    entry: "./app.js",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.sss$/,
                use: ['sss-loader']
            }
        ]
    },
    resolveLoader: {
        modules: ['node_modules', 'loader']
    },
    plugins: [
        new MyPluginName()
    ]
}

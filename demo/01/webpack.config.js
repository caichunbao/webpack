const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                    "less-loader",
                ]
            },
            {
                test: /\.png$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]_[hash:6].[ext]",
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[hash:6].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '123',
            template: './src/index.html',
        })
    ]
}
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: [
        "./src/app.js",
        "jquery"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)/,
                loader: "file-loader",
                options: {
                    outputPath: "./assets",
                    context: "project"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/app.html",
            filename: "index.html"
        }),
        new webpack.ProvidePlugin({
        })
    ]
}
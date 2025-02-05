const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const isDev = argv.mode === "development";

    return {
        entry: "./src/index.js",
        output: {
            filename: "bundle.[contenthash].js",
            path: path.resolve(__dirname, "dist"),
            clean: true,
        },
        devtool: isDev ? "source-map" : false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
        optimization: {
            minimize: !isDev,
            minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
            new HtmlWebpackPlugin({ template: "index.html" }),
        ],
        devServer: {
            static: "./dist",
            hot: true,
            watchFiles: ["src/**/*"],
            open: true,
        },
        mode: isDev ? "development" : "production",
    };
};

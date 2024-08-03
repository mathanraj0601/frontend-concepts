const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/", // no need to specify in latest webpack
  },
  module: {
    rules: [
      { use: "babel-loader", test: /\.js$/ },
      //   { use: ["style-loader", "css-loader"], test: /\.css$/ },
      { use: [MiniCssExtractPlugin.loader, "css-loader"], test: /\.css$/ },
      {
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
              fallback: require.resolve("responsive-loader"), // fallback for big size images
            }, //if image of size lessthan 40kb include it in bundle.js
          },
          "image-webpack-loader",
        ],
        test: /\.(jpe?g|png|svg|webp)$/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = config;

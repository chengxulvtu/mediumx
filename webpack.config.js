const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    background: path.resolve(__dirname, "src/background.js"),
    main: path.resolve(__dirname, "src/medium-reader.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]"
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "static", to: "static" },
        { from: "manifest.json", to: "manifest.json" }
      ]
    }),
    new CleanWebpackPlugin()
  ]
};

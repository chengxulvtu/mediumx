const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    background: path.resolve(__dirname, "src/background.js")
    // main: path.resolve(__dirname, "src/medium-enhanced-reader.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "static", to: "." },
        { from: "manifest.json", to: "manifest.json" }
      ]
    }),
    new CleanWebpackPlugin()
  ]
};

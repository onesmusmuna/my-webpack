const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({title: "Development"})]
};

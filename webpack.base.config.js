const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/assets/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [new VueLoaderPlugin()],
};

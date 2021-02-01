const path = require("path");
const { merge } = require("webpack-merge");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, "src/client/index.js"),
  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
  ],
});

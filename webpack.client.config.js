const { merge } = require("webpack-merge");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
  entry: {
    app: "./src/client/index.js",
  },
  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
  ],
});

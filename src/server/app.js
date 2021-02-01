import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../../webpack.config";

const webpackCompiler = webpack(webpackConfig);
const app = express();

/**
 * use express server as webpack-dev-server
 */
app.use(webpackDevMiddleware(webpackCompiler));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(9000);

import path from "path";
import express from "express";
import favicon from "serve-favicon";
import yargs from "yargs";
import setupDevelopmentBuild from "./libs/setup-development-build";
import { sendErrorResponse } from "./libs/utils";

const { argv } = yargs(process.argv.slice(2));
let developmentBuild;

const app = express();
app.use("/assets/", express.static(path.join(__dirname, "../../dist")));
app.use(favicon(path.join(__dirname, "public/swirl.webp")));

if (argv.env === "dev") {
  developmentBuild = setupDevelopmentBuild();
  const { clientBundleMiddleware, clientHotMiddleware } = developmentBuild;

  app.use(clientBundleMiddleware);
  app.use(clientHotMiddleware);
}

app.get("*", async (request, response) => {
  const timestamp = Date.now();
  response.setHeader("Content-Type", "text/html");

  if (argv.env === "dev") {
    const { readyPromise } = developmentBuild;
    const context = {
      url: request.url,
    };

    const renderer = await readyPromise;

    try {
      const html = await renderer.renderToString(context);
      response.send(html);
      console.log(`whole request: ${Date.now() - timestamp}ms`);
    } catch (renderError) {
      sendErrorResponse(renderError);
    }
  }
});

console.log("app listening on port 9000");

app.listen(9000);

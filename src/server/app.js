import fs from "fs";
import path from "path";
import express from "express";
import { createBundleRenderer } from "vue-server-renderer";
import favicon from "serve-favicon";
import serverBundle from "../../dist/vue-ssr-server-bundle.json";
import clientManifest from "../../dist/vue-ssr-client-manifest.json";

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync(
    path.join(__dirname, "index.template.html"),
    "utf-8"
  ),
  clientManifest,
});

const app = express();
app.use("/assets/", express.static(path.join(__dirname, "../../dist")));
app.use(favicon(path.join(__dirname, "public/swirl.webp")));

app.get("*", async (request, response) => {
  const context = { url: request.url };
  try {
    const html = await renderer.renderToString(context);
    response.send(html);
  } catch {
    response.status(500).end("Internal Server Error");
  }
});

app.listen(9000);

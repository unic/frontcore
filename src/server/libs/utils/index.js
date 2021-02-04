import path from "path";
import baseConfig from "../../../../webpack.base.config";

/* eslint-disable no-console */

/**
 * @description Checks for errors in webpack build. Logs errors to console and returns the errors
 * @param {Object} stats
 * @returns {Array} array of errors
 */
export const handleWebpackBuildErrors = (stats) => {
  const jsonStats = stats.toJson();
  jsonStats.errors.forEach((buildError) => console.error(buildError));
  jsonStats.warnings.forEach((buildWarning) => console.warn(buildWarning));
  return jsonStats.errors;
};

export const sendErrorResponse = (error, response) => {
  if (error.code === 404) {
    response.status(404).send("404 | Page Not Found");
  } else if (error.code === 500) {
    response.status(500).send(`
      <h1>500 | Internal Server Error<h1>
      <pre>${error.stack}</pre>
    `);
    console.error(error.stack);
  } else {
    response.send(`
      <h1>Unknown error</h1>
      <pre>${error.stack}</p>
    `);
  }
};

export const readFile = (filesystem, file) => {
  const filePath = path.join(baseConfig.output.path, file);
  try {
    return filesystem.readFileSync(filePath, "utf-8");
  } catch {
    return new Error(`Error reading file ${filePath}`);
  }
};

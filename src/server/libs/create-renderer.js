import { createBundleRenderer } from "vue-server-renderer";
import LRU from "lru-cache";

export default (bundle, options) => {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      // for component caching
      cache: new LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15,
      }),
      // recommended for performance
      runInNewContext: false,
    })
  );
};

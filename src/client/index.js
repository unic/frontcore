import createApp from "../libs/create-app";

const { app, router, store } = createApp();

router.onReady(() => {
  /* eslint-disable no-underscore-dangle */
  if (window.__INITIAL_STATE__) {
    // We initialize the store state with the data injected from the server
    store.replaceState(window.__INITIAL_STATE__);
  }
  /* eslint-enable no-underscore-dangle */

  app.$mount("#app");
});

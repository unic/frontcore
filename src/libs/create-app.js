import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "../client/app.vue";
import createRouter from "./create-router";
import createStore from "./create-store";

/* eslint-disable-next-line no-unused-vars */
export default function createApp(context) {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    // the root instance simply renders the App component.
    render: (h) => h(App),
  });
  return { app, router, store };
}

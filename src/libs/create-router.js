import Vue from "vue";
import Router from "vue-router";
import Home from "../client/pages/home.vue";
import Documentation from "../client/pages/documentation.vue";
import PageNotFound from "../client/pages/page-not-found.vue";

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/docs",
        component: Documentation,
      },
      {
        path: "*",
        component: PageNotFound,
      },
    ],
  });
}

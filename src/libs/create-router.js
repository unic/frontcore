import Vue from "vue";
import Router from "vue-router";
import Button from "../client/components/button/button.vue";

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: "history",
    routes: [{ path: "/button", component: Button }],
  });
}

import Vue from "vue";
import App from "./app.vue";

const app = new Vue({
  el: "#app",
  // the root instance simply renders the App component.
  render: (h) => h(App),
});

export default app;

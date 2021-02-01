import Vue from "vue";

const createVueApp = (context) => {
  return new Vue({
    data: context.data,
    template: "<div>The visited URL is: {{ url }}</div>",
  });
};

export default createVueApp;

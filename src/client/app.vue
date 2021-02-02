<template>
  <div id="app">
    <v-main-layout />
  </div>
</template>

<script>
import MainLayout from "./layouts/main.vue";

export default {
  name: "VApp",
  components: {
    "v-main-layout": MainLayout,
  },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>

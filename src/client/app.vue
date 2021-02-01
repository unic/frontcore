<template>
  <v-button />
</template>

<script>
import VButton from "./components/button/button.vue";

export default {
  name: "VApp",
  components: {
    VButton,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5%;
  margin-left: 5%;
  color: #2c3e50;
  text-align: center;
}
</style>

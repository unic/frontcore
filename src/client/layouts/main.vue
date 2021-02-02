<template>
  <div class="flex flex-col min-h-screen w-100 bg-gray-50">
    <v-header />
    <div class="py-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../components/header/header.vue";

export default {
  components: {
    "v-header": Header,
  },
};
</script>

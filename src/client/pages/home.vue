<template>
  <main class="container mx-auto">
    <section class="py-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-lg font-bond pb-3">What is frontcore for?</h2>
        <p class="pb-3 leading-relaxed">
          frontcore is a front end development/prototyping tool with the goal of
          reducing the cost integration with back end systems during deployment.
          It seeks to accomplish this by integrating the server side rendering
          workflow into the front end development process. With the goal of
          consuming the artifacts from the front end build in directly in
          pre-existing server rendering capabilities of back end systems.
        </p>
        <h2 class="text-lg font-bold pb-3">What is frontcore made of?</h2>
        <p class="pb-3 leading-relaxed">
          frontcore is built with express, vue, vuex, webpack.
        </p>
        <v-item></v-item>
      </div>
    </section>
  </main>
</template>

<script>
import Item from "../components/item/item.vue";

export default {
  components: {
    "v-item": Item,
  },
  data() {
    return {
      pageTitle: "frontcore",
    };
  },
};
</script>

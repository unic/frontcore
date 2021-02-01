<template>
  <button class="example">
    {{ msg }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
};
</script>

<style>
.example {
  color: red;
}
</style>

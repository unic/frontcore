<template>
  <header
    class="flex items-center justify-between p-3 bg-purple-500 text-white shadow-md"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg
        class="h-8 w-8 mr-2 transform rotate-90"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <h1 class="font-semibold text-xl tracking-tight">frontcore</h1>
    </div>
    <nav class="flex items-center">
      <div class="block md:hidden">
        <button
          class="px-3 py-2 border rounded text-purple-lighter border-purple-light hover:text-white hover:border-white"
        >
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul class="flex items-center hidden md:flex">
        <li class="px-3">
          <router-link to="/" class="text-white">home</router-link>
        </li>
        <li>
          <router-link to="/docs" class="text-white">docs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: "frontcore",
    };
  },
};
</script>

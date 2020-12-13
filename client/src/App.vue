<template>
  <div class="font-body bg-gray-200 dark:bg-black">
    <Navbar />
    <div class="mt-16">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>

</style>

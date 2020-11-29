<template>
  <div class="home bg-gray-200 dark:bg-black h-full">
    <Landing />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Landing
  }
};
</script>

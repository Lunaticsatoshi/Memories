<template>
  <nav class="bg-white dark:bg-black py-4 border-t-8 border-blue-500 dark:border-green-600">
    <div class="container flex justify-between items-center mx-auto">
      <div>
        <a href="#" class="font-bold text-gray-800 dark:text-white text-2xl tracking-widest mx-4">Memories</a>
      </div>
      <div>
          <ul class="flex items-center">
              <li class="p-2 mx-4 dark:text-white"><router-link to="/">Home</router-link></li>
              <li class="p-2 mx-4 dark:text-white"><router-link to="/about">About</router-link></li>
              <li class="p-2 mx-4"><a href="/register" class="rounded-full bg-purple-600 border-purple-600 px-6 py-2 text-white">Register</a></li>
          </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>
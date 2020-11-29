<template>
  <div class="login bg-gray-200 dark:bg-black">
    <div class="flex justify-center items-center h-full">
      <div class="flex max-w-4xl">
        <div class="bg-white w-1/2 p-8">
            <h1 class="text-gray-700 text-3xl text-center">Login</h1>
            <div class="my-3">
                <input type="email" placeholder="Email" class="border-rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3">
                <input type="password" placeholder="Password" class="border-rounded w-full py-2 px-4 outline-none focus:shadow-outline" />
            </div>
            <div class="my-3 flex justify-between">
                <label for=""><input type="checkbox" />Remember Me</label>
                <a href="#" class="text-blue-400">Forgot Email or Password?</a>
            </div>
            <div class="my-3 flex justify-center items-center">
                <button class="rounded-full bg-blue-600 border-blue-600 px-8 py-2 text-white w-1/2">Login</button>
            </div>
        </div>
        <div class="w-1/2">
            <img src="https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWVtb3JpZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60" class="w-full h-full" alt="Login">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
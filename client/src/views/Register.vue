<template>
  <div class="register bg-gray-200 dark:bg-black">
    <div class="flex justify-center items-center h-full">
      <div class="flex max-w-4xl mt-20">
        <div class="bg-white w-full lg:w-1/2 p-8">
          <h1 class="text-gray-700 text-3xl text-center">Sign Up</h1>
          <form @submit.prevent="registerUser">
            <div class="my-3">
              <input
                type="text"
                placeholder="Username"
                v-model="userName"
                class="border-rounded w-full py-2 px-4 outline-none focus:shadow-outline"
              />
            </div>
            <div class="my-3">
              <input
                type="email"
                placeholder="Email"
                v-model="email"
                class="border-rounded w-full py-2 px-4 outline-none focus:shadow-outline"
              />
            </div>
            <div class="my-3">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="border-rounded w-full py-2 px-4 outline-none focus:shadow-outline"
              />
            </div>
            <div class="my-3 flex justify-center items-center">
              <input
                type="submit"
                value="Register"
                @submit="loginUser"
                class="rounded-full bg-blue-600 border-blue-600 px-8 py-2 text-white w-1/2"
              />
            </div>
          </form>
          <div class="my-3 flex justify-center items-center">
            <p class="text-gray-800 text-sm">Already have an Account?</p>
            <a href="/login" class="text-blue-400">Login</a>
          </div>
        </div>
        <div class="w-1/2 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1534531688091-a458257992cb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWVtb3JpZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
            class="w-full h-full"
            alt="Login"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async registerUser(){
      console.log(this.userName, this.email);
      try {
        let user = {
          userName: this.userName,
          email: this.email,
          password: this.password
        }

        let res = await this.register(user);
        if(res.data.success){
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style>
</style>
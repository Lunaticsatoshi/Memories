<template>
  <div class="login bg-gray-200 dark:bg-black">
    <div class="flex justify-center items-center h-full">
      <div class="flex max-w-4xl mt-20">
        <div class="bg-white p-8 w-full lg:w-1/2">
          <h1 class="text-gray-700 text-3xl text-center">Login</h1>
          <form @submit.prevent = "loginUser">
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
            <div class="my-3 flex justify-between sm:flex-col lg:flex-row">
              <label for=""><input type="checkbox" />Remember Me</label>
              <a href="#" class="text-blue-400">Forgot Email or Password?</a>
            </div>
            <div class="my-3 flex justify-center items-center">
              <input
                type="submit"
                value="Login"
                class="rounded-full bg-blue-600 border-blue-600 px-8 py-2 text-white w-1/2"
              />
            </div>
          </form>
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
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async loginUser() {
      console.log(this.email, this.password, "login User");
      try {
        let user = {
          email: this.email,
          password: this.password,
        };
        let res = await this.login(user);
        // console.log(res);
        if (res.data.success) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
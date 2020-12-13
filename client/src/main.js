import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import jwtDecode from 'jwt-decode';
import { removeToken } from "./store/helpers";
import { removeAuthorization, setAuthorization } from "./store/api";

//Get Token from Localstorage
const token = localStorage.getItem('token')

//Set Axios Authorization header
if (token){
  const decodedToken = jwtDecode(token)
  if (decodedToken.exp * 1000 < Date.now()){
    removeToken();
    removeAuthorization();
  }else {
    setAuthorization(token);
  }
}


createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

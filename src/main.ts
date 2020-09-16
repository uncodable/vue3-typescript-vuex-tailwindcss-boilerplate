import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "@/utils/globalComponents";
import "./assets/css/tailwind.css";

createApp(App)
  .use(router)
  .use(store)
  .use(globalComponents)
  .mount("#app");

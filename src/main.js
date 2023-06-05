import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
import { LazyPlugin } from "@/directives";
import { componentPlugin } from "./components";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// import { getCategory } from "@/apis/testAPI";
// getCategory().then((res) => {
//   console.log(res);
// });
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router);
app.use(LazyPlugin);
app.use(componentPlugin);
app.mount("#app");

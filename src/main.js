import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "@/styles/common.scss";
import { useIntersectionObserver } from "@vueuse/core";
// import { getCategory } from "@/apis/testAPI";
// getCategory().then((res) => {
//   console.log(res);
// });
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
app.directive("img-lazy", {
  mounted(el, binding) {
    console.log(el, binding.value);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if (isIntersecting) {
        el.src = binding.value;
      }
    });
  },
});

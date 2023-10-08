// 把components中的所组件都进行全局化注册
// 通过插件的方式
import ImageView from "@/components/ImageView/index.vue";
import Sku from "@/components/XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", Sku);
  },
};
//最后引入到main.js 全局组件插件
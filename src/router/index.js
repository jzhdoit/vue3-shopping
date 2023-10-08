import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";
import layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import category from "@/views/Category/index.vue";

const SubCategory = ()=>import("@/views/SubCategory/index.vue")
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue"
import PayBack from "@/views/Pay/PayBack.vue";
import Member from "@/views/Member/index.vue"
import UseInfo from "@/views/Member/components/UseInfo.vue";
import UseOrder from "@/views/Member/components/UseOrder.vue";
import SKU from "@/views/SKU/Sku.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          component: Checkout,
        },
        {
          path:"pay",
          component:Pay,
        },
        {
          path:"paycallback",
          component:PayBack,
        },
        {
          path:'member',
          component:Member,
          children:[
            {
              path:'',
              component:UseInfo
            },
            {
              path:'order',
              component:UseOrder
            }
          ]
        },
        {
          path:'sku',
          component:SKU
        }
      ],
    },
    {
      path: "/login",
      component: login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;

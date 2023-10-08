import { getCategoryAPI } from "@/api/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref } from "vue";
//导出变量 函数表达式
export const useCategory =  () => {
  const categoryData = ref({});
  const route = useRoute();
  const getCategorycate = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
    console.log(categoryData.value);
  };
  onMounted(() => getCategorycate());
  
   // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    console.log(to);
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategorycate(to.params.id);
  });
  return {
    categoryData,
  };
}

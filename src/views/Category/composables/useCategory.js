import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref } from "vue";
export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategorycate = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategorycate());

  onBeforeRouteUpdate((to) => {
    console.log(to);
    getCategorycate(to.params.id);
  });
  return {
    categoryData,
  };
}

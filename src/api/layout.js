import httpInstance from "@/utils/http.js";
//获取全部分类（一级分类列表）
export function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}

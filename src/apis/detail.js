import request from "@/utils/http";
import exp from "constants";

export const getDetail = (id) => {
  return request({
    url: "/goods",
    params: {
      id,
    },
  });
};

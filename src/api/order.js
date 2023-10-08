import request from '@/utils/http'


/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
//我的订单我的订单
export const getUserOrder = (params) => {
    return request({
      url:'/member/order',
      method:'GET',
      params
    })
  }   


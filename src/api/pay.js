import request from "@/utils/http"
//获取-订单详情(以及支付结果)
export const  getOrderAPI=(id )=>{
    return request({
        url:`/member/order/${id}`
    })

} 
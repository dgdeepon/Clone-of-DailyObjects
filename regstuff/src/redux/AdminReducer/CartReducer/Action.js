import axios from "axios";
import { cartdatareq,cartdatafail,cartdatasucc } from "./ActionTypes";
export const cardatarequest=()=>{
    return {type:cartdatareq}
}
export const cartdatasuccess=(payload)=>{
    return {type:cartdatasucc,payload}
}
export const cartdatafailure=()=>{
    return {type:cartdatafail}
}
export const cartdata=(dispatch)=>{
    dispatch(cardatarequest())
    const token=JSON.parse(localStorage.getItem("token"))
   axios.get("https://dailyobject-clonebe.onrender.com/admin/cart",{
        headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res)=>{
            dispatch(cartdatasuccess(res.data))
        }).catch((res)=>{
            dispatch(cartdatafailure())
        })
}
import axios from "axios"
import { singleproductfail,singleproductreq,singleproductsucc } from "./ActionType"

export const singleproductrequest=()=>{
    return {type:singleproductreq}
}
export const singleproductsuccess=(payload)=>{
    return {type:singleproductsucc,payload}
}
export const singleproductfailure=()=>{
    return {type:singleproductfail}
}
export const singleproduct=(id)=>(dispatch)=>{
  
    dispatch(singleproductrequest())
    return axios.get(`https://dailyobject-clonebe.onrender.com/data/${id}`)
}
import axios from "axios"
import { addproductfail,addproductsucc,addproductreq } from "./ActionTypes"

export const addproductrequest=()=>{
    return {type:addproductreq}
}
export const addproductsuccess=(payload)=>{
    return {type:addproductsucc}
}
export const addproductfailure=()=>{
    return {type:addproductfail}
}

export const addproduct=(obj)=>(dispatch)=>{
    dispatch(addproductrequest())
const token=JSON.parse(localStorage.getItem("token"))



    return axios.post("https://dailyobject-clonebe.onrender.com/admin/add",obj,{
headers: {
    Authorization: `Bearer ${token}`
  }
})

}
import axios from "axios"

import { editproductfail,editproductsucc,editproductreq } from "./ActionTypes"
export const editproductrequest=()=>{
    return {type:editproductreq}
}
export const editproductsuccess=()=>{
    return {type:editproductsucc}
}
export const editproductfailure=()=>{
    return {type:editproductfail}
}
export const editproduct=(id,obj)=>(dispatch)=>{
    // console.log(id,obj)
    dispatch(editproductrequest())
    const token=localStorage.getItem("admintoken")
    return axios.patch(`https://dailyobject-clonebe.onrender.com/admin/edit/${id}`,obj,{
        headers: {
            Authorization: `Bearer ${token}`
          }
        })
}
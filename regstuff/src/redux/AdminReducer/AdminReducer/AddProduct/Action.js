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
const token=localStorage.getItem("admintoken")



    return axios.post(`${process.env.REACT_APP_ADMIN}/add`,obj,{
headers: {
    Authorization: `Bearer ${token}`
  }
})

}
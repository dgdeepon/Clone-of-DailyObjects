import axios from "axios"
import { adminregfail, adminregreq, adminreqsucc } from "./ActionType"

export const adminregisterrequest=()=>{
    return {type:adminregreq}
}
export const adminregistersuccess=(payload)=>{
    return {type:adminreqsucc}
}
export const adminregisterfailed=()=>{
    return {type:adminregfail}
}

export const adminregister=(obj)=>(dispatch)=>{
    dispatch(adminregistersuccess())
const token=JSON.parse(localStorage.getItem("token"))



    return axios.post("https://dailyobject-clonebe.onrender.com/admin/register",obj,{
headers: {
    Authorization: `Bearer ${token}`
  }
})

}
import { adminlogfail, adminlogreq, adminlogsucc } from "./ActionType"
import axios from "axios"
export const adminloginrequest=()=>{
    return {type:adminlogreq}
}
export const adminloginfailed=(payload)=>{
    return {type:adminlogfail,payload}
}
export const adminloginsuccess=(payload)=>{
    return {type:adminlogsucc,payload}
}


export const adminlogin=(obj)=>(dispatch)=>{
    dispatch(adminloginrequest())
    return axios.post(`${process.env.REACT_APP_ADMIN}/login`,obj)
}
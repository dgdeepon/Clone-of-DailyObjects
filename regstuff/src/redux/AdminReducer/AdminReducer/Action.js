import axios from "axios"

import { admindatafail,admindatasucc,admindatareq } from "./ActionTypes"
export const admindatarequest=()=>{
    return {type:admindatareq}
}
export const admindatasuccess=(payload)=>{
    return {type:admindatasucc,payload}
}
export const admindatafailure=()=>{
    return {type:admindatafail}
}
export const alladmindata=(dispatch)=>{
    dispatch(admindatarequest())
    const token=JSON.parse(localStorage.getItem("token"))
    axios.get("https://dailyobject-clonebe.onrender.com/admin/adminList",{
        headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res)=>{
        console.log(res.data)
        dispatch(admindatasuccess(res.data))

    }).catch((err)=>dispatch(admindatafailure()))
}
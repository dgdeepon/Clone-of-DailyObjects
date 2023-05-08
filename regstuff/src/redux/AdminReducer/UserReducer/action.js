import axios from "axios"
import { userdatafail, userdatareq, userdatasucc } from "./actionTypes"

export const userdatarequest=()=>{
    return {type:userdatareq}
}
export const userdatasuccess=(payload)=>{
    return {type:userdatasucc,payload}
}
export const userdatafailure=()=>{
    return {type:userdatafail}
}


export const userdata=(dispatch)=>{
    dispatch(userdatarequest())
    const token=localStorage.getItem("admintoken")

    axios.get(`${process.env.REACT_APP_ADMIN}/userlist`,{headers: {
        Authorization: `Bearer ${token}`
      }}).then((res)=>{
        // console.log(res)
        dispatch(userdatasuccess(res.data))
    }).catch((err)=>{
        dispatch(userdatafailure())
    })
}

import axios from "axios"

import { deleteareq,deletefail,deletesucc } from "./ActionTypes"
export const deleterequest=()=>{
    return {type:deleteareq}
}
export const deletesuccess=()=>{
    return {type:deletesucc}
}
export const deletefailure=()=>{
    return {type:deletefail}
}
export const deletedata=(id)=>(dispatch)=>{
    dispatch(deleterequest())
    const token=localStorage.getItem("admintoken")
    return axios.delete(`${process.env.REACT_APP_ADMIN}/delete/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
          }
        })
}
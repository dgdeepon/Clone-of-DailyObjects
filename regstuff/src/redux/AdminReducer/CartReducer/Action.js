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
    const token=(localStorage.getItem("admintoken"))
   axios.get(`${process.env.REACT_APP_ADMIN}/cart`,{
        headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res)=>{
            dispatch(cartdatasuccess(res.data))
        }).catch((res)=>{
            dispatch(cartdatafailure())
        })
}
import axios from "axios"
import { productfail, productreq, productsucc } from "./actionType"

export const allproductrequest=()=>{
    return {type:productreq}
}
export const allproductsuccess=(payload)=>{
    return {type:productsucc,payload}
}
export const allproductfailure=()=>{
    return {type:productfail}
}
export const allproduct=(dispatch)=>{
    dispatch(allproductrequest())
    axios.get(process.env.REACT_APP_DATA).then((res)=>{
        // console.log(res.data)
        dispatch(allproductsuccess(res.data))

    }).catch((err)=>dispatch(allproductfailure()))
}
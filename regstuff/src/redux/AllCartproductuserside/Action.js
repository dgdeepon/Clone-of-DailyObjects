import axios from "axios"
import { usercartfail,usercartreq,usercartsucc } from "./ActionTypes"

export const usercartrequest=()=>{
    return {type:usercartreq}
}
export const usercartsuccess=(payload)=>{
    return {type:usercartsucc,payload}
}
export const usercartfailure=()=>{
    return {type:usercartfail}
}
export const usercartproduct=(dispatch)=>{
    dispatch(usercartrequest())
    const token=localStorage.getItem("token")
    console.log(token)
    axios.get("https://dailyobject-clonebe.onrender.com/cartData",{
        				headers: {
        					Authorization: `Bearer ${token}`
        				  }
        				}).then((res)=>{
                            console.log(res)
                            dispatch(usercartsuccess(res.data))
                        }).catch((err)=>dispatch(usercartfailure()))
      
  

 
}
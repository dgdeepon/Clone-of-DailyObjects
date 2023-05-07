import { adminlogreq, adminlogsucc } from "./ActionType"

const initialstate={
    isLoading:false,
    isError:false,
    auth:localStorage.getItem("admintoken")||"",
    msg:""
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case adminlogreq:{
            return {...state,isLoading:true,isError:false,auth:"",msg:""}
        }
        case adminlogsucc:{
            return {...state,isLoading:false,isError:false,auth:localStorage.setItem("admintoken",(payload.token)),msg:payload.success}
        }
        case adminlogsucc:{
            return {...state,isLoading:false,isError:true,auth:"",msg:""}
        }
        default:{
            return state
        }
    }
}
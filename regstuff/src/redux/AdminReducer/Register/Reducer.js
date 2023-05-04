import { adminregreq, adminregfail, adminreqsucc } from "./ActionType"

const initialstate={
    isLoading:false,
    isError:false,
    msg:""
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case adminregreq:{
        return {...state,isLoading:true,isError:false,msg:""}
        }
        case adminreqsucc:{
            return {...state,isLoading:false,isError:false,msg:""}
        }
        case adminregfail:{
            return {...state,isLoading:false,isError:true,msg:""}
        }
        default:{
            return state
        }
    }
}
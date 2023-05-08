import { usercartfail,usercartreq,usercartsucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
   data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case usercartreq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case usercartsucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case usercartfail:{
            return {
                ...state,isLoading:false,isError:false,data:[]
            }
        }
        default:{
            return state
        }
       
    }
}
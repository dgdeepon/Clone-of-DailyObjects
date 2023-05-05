import { userdatafail, userdatareq, userdatasucc } from "./actionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    data:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case userdatareq:{
            return {...state,isLoading:true,isError:false,data:[]}
        }
        case userdatasucc:{
            return {...state,isLoading:false,isError:false,data:payload}
        }
        case userdatafail:{
            return {...state,isLoading:false,isError:true,data:[]}
        }
        default:{
            return state
        }
    }
}
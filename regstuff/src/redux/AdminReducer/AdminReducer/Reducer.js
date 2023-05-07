import { admindatareq,admindatafail,admindatasucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
  admindata:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case admindatareq:{
            return {...state,isLoading:true,isError:false,admindata:[]}
        }
        case admindatasucc:{
            return {...state,isLoading:false,isError:false,admindata:payload}
        }
        case admindatafail:{
            return {
                ...state,isLoading:false,isError:false,admindata:[]
            }
        }
        default:{
            return state
        }
       
    }
}
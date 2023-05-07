import { deleteareq,deletesucc,deletefail } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false

}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case deleteareq:{
            return {...state,isLoading:true,isError:false}
        }
        case deletesucc:{
            return {...state,isLoading:false,isError:false}
        }
        case deletefail:{
            return {
                ...state,isLoading:false,isError:false
            }
        }
        default:{
            return state
        }
       
    }
}
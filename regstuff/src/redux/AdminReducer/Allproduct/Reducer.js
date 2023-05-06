import { productfail, productreq, productsucc } from "./actionType"

const initialdata={
    isLoading:false,
    isError:false,
   productdata:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case productreq:{
            return {...state,isLoading:true,isError:false,productdata:[]}
        }
        case productsucc:{
            return {...state,isLoading:false,isError:false,productdata:payload}
        }
        case productfail:{
            return {
                ...state,isLoading:false,isError:false,productdata:[]
            }
        }
        default:{
            return state
        }
       
    }
}
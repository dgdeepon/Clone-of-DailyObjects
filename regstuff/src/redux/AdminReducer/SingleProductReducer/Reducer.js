import { singleproductfail,singleproductsucc,singleproductreq } from "./ActionType"

const initialdata={
    isLoading:false,
    isError:false,
   singledata:[]
}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case singleproductreq:{
            return {...state,isLoading:true,isError:false,singledata:[]}
        }
        case singleproductsucc:{
            return {...state,isLoading:false,isError:false,singledata:payload}
        }
        case singleproductfail:{
            return {
                ...state,isLoading:false,isError:false,singledata:[]
            }
        }
        default:{
            return state
        }
       
    }
}
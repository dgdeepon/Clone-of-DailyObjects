import { editproductfail,editproductsucc,editproductreq } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false

}
export const reducer=(state=initialdata,action)=>{
    const {type,payload}=action
    switch(type){
        case editproductreq:{
            return {...state,isLoading:true,isError:false}
        }
        case editproductsucc:{
            return {...state,isLoading:false,isError:false}
        }
        case editproductfail:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        default:{
            return state
        }
       
    }
}
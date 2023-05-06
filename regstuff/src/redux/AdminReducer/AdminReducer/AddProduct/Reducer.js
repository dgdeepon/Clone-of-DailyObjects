import { addproductreq,addproductsucc,addproductfail } from "./ActionTypes"

const initialstate={
    isLoading:false,
    isError:false,
    msg:""
}

export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case addproductreq:{
        return {...state,isLoading:true,isError:false,msg:""}
        }
        case addproductsucc:{
            return {...state,isLoading:false,isError:false,msg:""}
        }
        case addproductfail:{
            return {...state,isLoading:false,isError:true,msg:""}
        }
        default:{
            return state
        }
    }
}
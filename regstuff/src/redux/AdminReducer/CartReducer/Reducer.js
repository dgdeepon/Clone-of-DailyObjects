import { cartdatafail, cartdatareq, cartdatasucc } from "./ActionTypes"

const initialstate={
    isLoading:false,
    isError:false,
    allcartdata:[]
}
export const reducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case cartdatareq:{
            return {...state,isLoading:true,isError:false,allcartdata:[]}
        }
        case cartdatasucc:{
            return {...state,isLoading:false,isError:false,allcartdata:payload}
        }
        case cartdatafail:{
            return {...state,isLoading:false,isError:true,allcartdata:[]}
        }
        default:{
            return state
        }
    }
}
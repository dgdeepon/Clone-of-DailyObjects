import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC, LOGOUT_NOW, REGISTER_REQ } from "./ActionType";



const init={
    token:localStorage.getItem("token")||"",
    userName:'',
    isLoading:false,
    isError:false,
};

export default function UserLoginReducer(state=init,action){
    switch(action.type){
        case LOGIN_REQ:
            return{
                ...state,
                token:'',
                userName:'',
                isLoading:true,
                isError:false
            }
        case LOGIN_SUCC:{
            localStorage.setItem("token",(action.payload.token))
         
            return{
                ...state,
                token:action.payload.token,
                userName:action.payload.name,
                isLoading:false,
                isError:false
        }}    
        case LOGIN_FAILED:
            return{
                ...state,
                token:'',
                userName:'',
                isLoading:false,
                isError:true
            }    
        case LOGOUT_NOW:{
            localStorage.removeItem("token")
            return {
                ...state,
                token:'',
                userName:'',
               isLoading:false,
                isError:false
            }}
        case REGISTER_REQ:
            return state;       
        default:
            return state;
    }
}
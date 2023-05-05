import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC } from "./ActionType";



const init={
    token:'',
    userName:'',
    isLoading:false,
    isError:false
};

export default function UserLoginReducer(state=init,action){
    switch(action.type){
        case LOGIN_REQ:
            return{
                ...state,
                token:'',
                isLoading:true,
                isError:false
            }
        case LOGIN_SUCC:
            return{
                ...state,
                token:action.paylaod,
                isLoading:false,
                isError:false
            }    
        case LOGIN_FAILED:
            return{
                ...state,
                token:'',
                isLoading:false,
                isError:true
            }    
        default:
            return state;
    }
}
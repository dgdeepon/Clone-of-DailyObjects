import axios from "axios";
import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC, LOGOUT_NOW, REGISTER_REQ } from "./ActionType"


export const LoginNow=(data)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ});
    axios.post(process.env.REACT_APP_USER_LOGIN,data)
    .then((res)=>{
        const obj={
            token:res.data.token,
            name:data.email
        }
        dispatch({type:LOGIN_SUCC,payload:obj});
    }).catch((err)=>{
        dispatch({type:LOGIN_FAILED});
        console.log(err);
    })
};

export const LogoutNow=(dispatch)=>{
    dispatch({type:LOGOUT_NOW});
};

export const RegisterNow=(data)=>(dispatch)=>{
    dispatch({type:REGISTER_REQ});
    return axios.post(process.env.REACT_APP_USER_REGISTER,data);
};
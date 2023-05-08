import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const location=useLocation();
    const {token}=useSelector((store)=> store.UserLoginReducer);
    const token2=localStorage.getItem('token');

  return token=='' || !token2 ? <Navigate to={'/userLogin'} state={location.pathname} replace={false}/> : children;
}

export default PrivateRoute
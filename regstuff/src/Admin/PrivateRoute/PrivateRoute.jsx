import React from 'react'
import { Navigate } from 'react-router-dom'
export default function PrivateRoute({children}) {
    const token=JSON.parse(localStorage.getItem("token"))
    if(token=="undefined"||!token){
        return <Navigate to="/admin/login" />
    }
return children

}



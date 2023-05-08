import React from 'react'
import { Navigate } from 'react-router-dom'
export default function PrivateRoute2({children}) {
    const token=localStorage.getItem("admintoken")
    if(token=="undefined"||!token){
        return <Navigate to="/admin/login" />
    }
return children

}



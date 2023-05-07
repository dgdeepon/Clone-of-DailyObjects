import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../Pages/Login'
import Account from '../Pages/Account'
import UserRegister from '../Pages/Register'
import PrivateRoute from './PrivateRoute'

function MainRoute() {
  return (
    <Routes>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/userRegister' element={<UserRegister/>}/>
        <Route path='/account' element={<PrivateRoute><Account/></PrivateRoute>}/>
    </Routes>
  )
}

export default MainRoute
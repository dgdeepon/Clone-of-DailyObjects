import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../components/Login'
import Account from '../Pages/Account'

function MainRoute() {
  return (
    <Routes>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/account' element={<Account/>}/>
    </Routes>
  )
}

export default MainRoute
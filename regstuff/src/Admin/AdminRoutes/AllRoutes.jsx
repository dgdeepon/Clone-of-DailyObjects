import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from '../Login'
import Register from '../Register'

import Delete from '../AdminDashboard/components/Delete'
import Overview from '../AdminDashboard/components/OverView'
import Admin from '../AdminDashboard/components/Admin'
import Order from '../AdminDashboard/components/Order'
import AddProduct from '../AdminDashboard/components/AddProduct'

import Products from '../AdminDashboard/components/Products'
import EditProduct from '../AdminDashboard/components/EditProduct'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
<Route path="/admin/login" element={<Login/>}></Route>
<Route path="/admin/register" element={<PrivateRoute><Register/></PrivateRoute>}></Route>
<Route path="/admin/dashboard" element={<PrivateRoute><Overview/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/delete" element={<PrivateRoute><Delete/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/overview" element={<PrivateRoute><Overview/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/admin" element={<PrivateRoute><Admin/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/orders" element={<PrivateRoute><Order/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/addproduct" element={<PrivateRoute><AddProduct/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/products" element={<PrivateRoute><Products/></PrivateRoute>}></Route>
<Route path="/admin/dashboard/edit/:id" element={<PrivateRoute><EditProduct/></PrivateRoute>}></Route>
        </Routes>
    </div>
  )
}

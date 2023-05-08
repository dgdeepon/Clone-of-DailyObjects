import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from '../Admin/Login'
import Register from '../Admin/Register'

import Delete from '../Admin/AdminDashboard/components/Delete'
import Overview from '../Admin/AdminDashboard/components/OverView'
import Admin from '../Admin/AdminDashboard/components/Admin'
import Order from '../Admin/AdminDashboard/components/Order'
import AddProduct from '../Admin/AdminDashboard/components/AddProduct'

import Products from '../Admin/AdminDashboard/components/Products'
import EditProduct from '../Admin/AdminDashboard/components/EditProduct'
import PrivateRoute2 from '../Admin/PrivateRoute/PrivateRoute2'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
<Route path="/admin/login" element={<Login/>}></Route>
<Route path="/admin/register" element={<PrivateRoute2><Register/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard" element={<PrivateRoute2><Overview/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/delete" element={<PrivateRoute2><Delete/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/overview" element={<PrivateRoute2><Overview/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/admin" element={<PrivateRoute2><Admin/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/orders" element={<PrivateRoute2><Order/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/addproduct" element={<PrivateRoute2><AddProduct/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/products" element={<PrivateRoute2><Products/></PrivateRoute2>}></Route>
<Route path="/admin/dashboard/edit/:id" element={<PrivateRoute2><EditProduct/></PrivateRoute2>}></Route>
        </Routes>
    </div>
  )
}

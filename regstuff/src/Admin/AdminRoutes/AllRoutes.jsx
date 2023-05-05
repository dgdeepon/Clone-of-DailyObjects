import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Login } from '../Login'
import Register from '../Register'
import FinalDash from '../AdminDashboard/components/FinalDash'
import Delete from '../AdminDashboard/components/Delete'
import Overview from '../AdminDashboard/components/OverView'
import Admin from '../AdminDashboard/components/Admin'
import Orders from '../AdminDashboard/components/Orders'
import AddProduct from '../AdminDashboard/components/AddProduct'
import Products from '../AdminDashboard/components/Products'
import EditProduct from '../AdminDashboard/components/EditProduct'
export default function AllRoutes() {
  return (
    <div>
        <Routes>
<Route path="/admin/login" element={<Login/>}></Route>
<Route path="/admin/register" element={<Register/>}></Route>
<Route path="/admin/dashboard" element={<FinalDash/>}></Route>
<Route path="/admin/dashboard/delete" element={<Delete/>}></Route>
<Route path="/admin/dashboard/overview" element={<Overview/>}></Route>
<Route path="/admin/dashboard/admin" element={<Admin/>}></Route>
<Route path="/admin/dashboard/orders" element={<Orders/>}></Route>
<Route path="/admin/dashboard/addproduct" element={<AddProduct/>}></Route>
<Route path="/admin/dashboard/products" element={<Products/>}></Route>
<Route path="/admin/dashboard/edit/:id" element={<EditProduct/>}></Route>
        </Routes>
    </div>
  )
}

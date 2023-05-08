import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "../Pages/Login";
import Account from "../Pages/Account";
import UserRegister from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../Homepage/LandingPage/LandingPage";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import { Payment } from "../Pages/Payment";
import { Login } from "../Admin/Login";
import PrivateRoute2 from "./PrivateRoute2";
import Register from "../Admin/Register";
import Overview from "../Admin/AdminDashboard/components/OverView";
import Delete from "../Admin/AdminDashboard/components/Delete";
import Admin from "../Admin/AdminDashboard/components/Admin";
import Order from "../Admin/AdminDashboard/components/Order";
import EditProduct from "../Admin/AdminDashboard/components/EditProduct";
import AddProduct from "../Admin/AdminDashboard/components/AddProduct";
import AdminProducts from "../Admin/AdminDashboard/components/AdminProducts";
import NotFound from "../Pages/404Not";

function MainRoute() {
    return (
        <Routes>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/" element={<LandingPage />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/userRegister" element={<UserRegister />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products" element={<Products />} />
            <Route
                path="/checkout"
                element={
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
                }
            />
            <Route path="/productdetails/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
                path="/payment"
                element={
                    <PrivateRoute>
                        <Payment />
                    </PrivateRoute>
                }
            />

            {/* admin routes */}

            <Route path="/admin/login" element={<Login/>}></Route>
            <Route path="/admin/register" element={<PrivateRoute2><Register/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard" element={<PrivateRoute2><Overview/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/delete" element={<PrivateRoute2><Delete/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/overview" element={<PrivateRoute2><Overview/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/admin" element={<PrivateRoute2><Admin/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/orders" element={<PrivateRoute2><Order/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/addproduct" element={<PrivateRoute2><AddProduct/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/products" element={<PrivateRoute2><AdminProducts/></PrivateRoute2>}></Route>
            <Route path="/admin/dashboard/edit/:id" element={<PrivateRoute2><EditProduct/></PrivateRoute2>}></Route>
        </Routes>
    );
}

export default MainRoute;

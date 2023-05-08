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

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userRegister" element={<UserRegister />} />
      <Route path="/account" element={<Account />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<PrivateRoute><CheckoutPage/></PrivateRoute>} />
      <Route path="/productdetails/:id" element={<SingleProductPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
  );
}

export default MainRoute;

import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "../Pages/Login";
import Account from "../Pages/Account";
import UserRegister from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../Homepage/LandingPage/LandingPage";
import Products from "../Pages/Products";
import { Payment } from "../Pages/Payment";

function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/userRegister" element={<UserRegister />} />
            <Route
                path="/account"
                element={
                    <PrivateRoute>
                        <Account />
                    </PrivateRoute>
                }
            />
            <Route path="/products" element={<Products />} />
            <Route
                path="/payment"
                element={
                    <PrivateRoute>
                        <Payment />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default MainRoute;

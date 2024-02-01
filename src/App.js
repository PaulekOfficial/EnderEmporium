import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import MainSite from "./sites/main";
import Layout from "./layout/Layout";
import VoucherSite from "./sites/voutcher";
import OrderStatusSite from "./sites/order-status";
import HelpSite from "./sites/help";
import RulesSite from "./sites/rules";
import NewsSite from "./sites/news";
import LoginLayout from "./sites/LoginLayout.tsx";
import RegisterLayout from "./sites/RegisterLayout.tsx";
import ForgotPasswordLayout from "./sites/ForgotPasswordLayout.tsx";
import Dashboard from "./sites/dashboard/Dashboard.jsx";
import DashboardLayout from "./layout/DashboardLayout";
import Users from "./sites/dashboard/Users";
import Products from "./sites/dashboard/product/Products";
import ProductCreator from "./sites/dashboard/product/ProductCreator";
import ProductEditor from "./sites/dashboard/product/ProductEditor";

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<MainSite/>}/>
                        <Route path={"page/*"} element={<MainSite/>}/>
                        <Route path={"order/lazy-status/*"} element={<OrderStatusSite/>}/>
                        <Route path={"voucher"} element={<VoucherSite/>}/>
                        <Route path={"help"} element={<HelpSite/>}/>
                        <Route path={"rules"} element={<RulesSite/>}/>
                        <Route path={"news"} element={<NewsSite/>}/>
                    </Route>

                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />}/>
                        <Route path={"users"} element={<Users />}/>
                        <Route path={"products"} element={<Products />}/>
                        <Route path={"product/creator"} element={<ProductCreator />}/>
                        <Route path={"product/editor/:id"} element={<ProductEditor />}/>
                    </Route>

                    <Route path="/login" element={<LoginLayout/>}/>
                    <Route path="/forgot-password" element={<ForgotPasswordLayout/>}/>
                    <Route path="/register" element={<RegisterLayout/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;

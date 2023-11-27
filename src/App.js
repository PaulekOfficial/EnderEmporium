import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import MainSite from "./sites/main";
import Layout from "./sites/Layout";
import VoucherSite from "./sites/voutcher";
import OrderStatusSite from "./sites/order-status";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainSite />} />
                    <Route path={"page/*"} element={<MainSite />} />
                    <Route path={"order/lazy-status/*"} element={<OrderStatusSite />} />
                    <Route path={"voucher"} element={<VoucherSite />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import MainSite from "./sites/main";
import Layout from "./sites/Layout";
import VoucherSite from "./sites/voutcher";
import OrderStatusSite from "./sites/order-status";
import HelpSite from "./sites/help";
import {AnimatedRoutes} from "./elements/animatedRoute";
import RulesSite from "./sites/rules";
import NewsSite from "./sites/news";
import LoginLayout from "./sites/LoginLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainSite />} />
                    <Route path={"page/*"} element={<MainSite />} />
                    <Route path={"order/lazy-status/*"} element={<OrderStatusSite />} />
                    <Route path={"voucher"} element={<VoucherSite />} />
                    <Route path={"help"} element={<HelpSite />} />
                    <Route path={"rules"} element={<RulesSite />} />
                    <Route path={"news"} element={<NewsSite />} />
                </Route>
                <Route path="/login" element={<LoginLayout />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

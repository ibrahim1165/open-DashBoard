import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/sherd/Layout";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import Order from "./components/Order";
import Transaction from "./components/Transaction";
import Customar from "./components/Customar";
import Setteing from "./components/Setteing";
import HelpAndSupport from "./components/HelpAndSupport";
import Login from "./components/singup/Login";
import NotFound from "./components/NotFound";
import CreatedAccount from "./components/singup/CreatedAccount";
import RequerAuth from "./components/singup/RequerAuth";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<CreatedAccount />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <RequerAuth>
            <Layout />
          </RequerAuth>
        }>
          <Route index element={<Dashboard />} />
          <Route path="/home/product" element={<Products />} />
          <Route path="/home/messages" element={<Messages />} />
          <Route path="/home/transactions" element={<Transaction />} />
          <Route path="/home/orders" element={<Order />} />
          <Route path="/home/customers" element={<Customar />} />
          <Route path="/home/settings" element={<Setteing />} />
          <Route path="/home/support" element={<HelpAndSupport />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
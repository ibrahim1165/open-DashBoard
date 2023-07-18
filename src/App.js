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

function App() {
  return (
    <div>


      <Routes>


        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customar />} />
          <Route path="/settings" element={<Setteing />} />
          <Route path="/support" element={<HelpAndSupport />} />

        </Route>








      </Routes>
    </div>
  );
}

export default App;
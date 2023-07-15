import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/sherd/Layout";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Routes>


        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
         
        </Route>








      </Routes>
    </div>
  );
}

export default App;
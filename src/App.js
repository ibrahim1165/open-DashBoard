import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./components/sherd/Layout";
import Dashboard from "./components/sherd/Dashboard";
import Products from "./components/Products";

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
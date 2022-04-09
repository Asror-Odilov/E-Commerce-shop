import React, { useState } from "react";
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProducList from "./Pages/ProducList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trendings from "./NavbarPageDirections/Trendings";
import News from "./NavbarPageDirections/News";
import OpenningLayer from "./Additions/OpenningLayer";






function App()  {

  return (
    <div className="App">
      <Router>
          <OpenningLayer />
         
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/register" element = {<Register />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/productlist" element = {<ProducList />} />
          <Route path="/trendings" element = {<Trendings />} />
          <Route path="/news" element = {<News />} />
          <Route path="/product" element = {<Product />} />
          <Route path="/cart" element = {<Cart />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;

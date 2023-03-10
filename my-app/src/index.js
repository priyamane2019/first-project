import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import './App.css';
import { BrowserRouter, Route,Routes}  from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from './components/Register';
import Login from "./components/Login"
 import Error from './components/Error';
 import Cart from "./components/Cart"
 import Mainheader from "./Mainheader"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<Mainheader />} >
    <Route index element={<Home />} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<Error/>} />
 </Route>
  </Routes>
  </BrowserRouter>
  
);

reportWebVitals();

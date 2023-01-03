import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import LandingPage from './components';
import ProductDetails from './components/Product/productDetails';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <section style={{marginTop:10}}>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/productdetails" element={<ProductDetails/>} />
          <Route exact path="/viewcart" element={<Cart/>}/>
        </Routes>
      </section>
    </>
  );
}

export default App;

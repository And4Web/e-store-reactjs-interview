import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import PaymentResponse from "./Cart/paymentResponse";
import Header from "./Header";
import MainContainer from "./MainContainer";
import ProductDetails from "./Product/productDetails";

const LandingPage = () => {
    console.log("landing page")
    return (
        <>
            <Header />
            <section className="main-container">
                <Routes>
                    <Route exact path="/" element={<MainContainer/>} />
                    <Route exact path="/productdetails" element={<ProductDetails/>} />
                    <Route exact path="/viewcart" element={<Cart/>} />
                    <Route exact path="/paymentresponse" element={<PaymentResponse/>} />
                </Routes>
            </section>
        </>
    )
}

export default LandingPage;
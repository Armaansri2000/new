import React from "react"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/shop"
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Nav from "./components/nav/Nav"
import Cart from "./pages/cart/cart"
import Contact from "./pages/Contact/contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App

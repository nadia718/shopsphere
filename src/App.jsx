import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import SingleProduct from "./pages/SingleProduct";
// import Navbar from "./components/Navbar";
// import { useState, useEffect } from "react";
// import products from "./data/product";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Success from "./pages/success";
// import CartProvider, { CartContext } from "./context/CartContext";

import CartProvider from "./context/CartContext";


function App() {

  // const [cart, setCart] = useState(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   return savedCart ? JSON.parse(savedCart) : [];
  // });

  // const addToCart = (product) => {
  //   const existingProduct = cart.find(
  //     (item) => item.id === product.id
  //   );

  //   if (existingProduct) {

  //     const updatedCart = cart.map((item) => {

  //       if (item.id === product.id) {

  //         return {
  //           ...item,
  //           quantity: (item.quantity || 1) + 1,
  //         };

  //       }

  //       return item;

  //     });

  //     setCart(updatedCart);
  //     // toast.success("Product added to cart");

  //   } else {

  //     setCart([
  //       ...cart,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ]);
  //     // toast.success("Product added to cart");

  //   }
  //   toast.success(`${product.title} added to cart`);


  // };

  // const increaseQuantity = (productId) => {

  //   const updatedCart = cart.map((item) => {

  //     if (item.id === productId) {

  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };

  //     }

  //     return item;

  //   });

  //   setCart(updatedCart);

  // };


  // const decreaseQuantity = (productId) => {

  //   const selectedProduct = cart.find(
  //     (item) => item.id === productId
  //   );

  //   if (selectedProduct.quantity === 1) {

  //     removeFromCart(productId);

  //   } else {

  //     const updatedCart = cart.map((item) => {

  //       if (item.id === productId) {

  //         return {
  //           ...item,
  //           quantity: item.quantity - 1,
  //         };

  //       } else {

  //         return item;
  //       }
  //     });

  //     setCart(updatedCart);

  //   }

  // };



  // useEffect(() => {

  //   const savedCart = localStorage.getItem("cart");
  //   if(savedCart){
  //       setCart(JSON.parse(savedCart))
  //   }else{
  //     "null";
  //   }

  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart])



  // const removeFromCart = (productId) => {

  //   const updatedCart = cart.filter(
  //     (item) => item.id !== productId
  //   );

  //   setCart(updatedCart);

  // };


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </CartProvider>
    </div>



    //  <div>
    //       <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Home cart={cart} />} />
    //           <Route path="/product" element={<Product addToCart={addToCart} cart={cart} />} />
    //           <Route path="/login" element={<Login cart={cart} />} />
    //           <Route path="/register" element={<Register cart={cart} />} />
    //           <Route path="/about" element={<About cart={cart} />} />
    //           <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity}
    //             decreaseQuantity={decreaseQuantity} />} />
    //           <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
    //           <Route path="/contact" element={<Contact cart={cart} />} />
    //           <Route path="/search" element={<Search cart={cart} />} />
    //           <Route path="/product/:id" element={<SingleProduct addToCart={addToCart} cart={cart} />} />
    //           <Route path="/success" element={<Success cart={cart} />} />

    //         </Routes>
    //         <ToastContainer />
    //       </BrowserRouter>
    //     </div>


  );




}





export default App;
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";


// function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {


function Cart() {  

  const {cart, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;

  }, 0);

  return (
    <>
      <Navbar />
      <PageBanner
        title="Cart"
        description="Manage your shopping cart"
      />
      

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-3xl font-samibold  mb-12 uppercase">
          Shopping Cart
        </h1>


        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-4 rounded-lg shadow mb-6">

            <img
              src={item.image}
              alt={item.title}
              className="w-28 h-28 object-contain"
            />

            <div className="flex-1">

              <h2 className="text-xl font-semibold">
                {item.title}
              </h2>

              <p className="text-blue-600 font-bold mt-2">
                ${item.price}
              </p>
              <button onClick={() => removeFromCart(item.id)}
                className="text-red-500 mt-3 cursor-pointer">
                Remove
              </button>

            </div>
            <div className="flex items-center gap-3 bg-blue-700 py-[20px] px-[50px] rounded-[10px] font-bold text-cyan-50 ">

              <button onClick={() => decreaseQuantity(item.id)} className="cursor-pointer">-</button>

              <span >{item.quantity}</span>

              <button className="cursor-pointer" onClick={() => increaseQuantity(item.id)}>+</button>

            </div>



          </div>

        ))}


        <div className="mt-10 bg-white p-6 rounded-lg shadow">

          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <p className="text-lg">
            Total: ${totalPrice}
          </p>


          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block"
          >
            Proceed To Checkout
          </Link>


        </div>

      </div>
      <Footer />
    </>
  );
}
export default Cart;
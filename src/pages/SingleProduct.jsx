import { useParams } from "react-router-dom";
import products from "../data/product";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import ProductCard from "../components/product";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";

function SingleProduct() {

  const {addToCart} = useContext(CartContext);

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  const relatedProducts = products.filter(
    (item) =>
    item.category === product.category &&
    item.id !== product.id
  );

  // const handleAddToCart = () =>{
  //   addToCart(product);
  //   toast.success("Product added to cart");
  // }


  return (
    <div>
      <Navbar />
      <PageBanner
        title=" Product "
        description="view product Detail" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">

          {/* Product Image */}
          <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8">

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-contain"
            />

          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">

            <p className="text-xs sm:text-sm text-gray-500 mb-2">
              {product.category}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
              ${product.price}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8 mb-8">
              Premium quality product with modern design and
              excellent performance. Perfect for everyday use.
              Premium quality product with modern design and
              excellent performance. Perfect for everyday use.
              Premium quality product with modern design and
              excellent performance. Perfect for everyday use.
              Premium quality product with modern design and
              excellent performance. Perfect for everyday use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto ">
                Add To Cart
              </button>

              <button className="border border-gray-300 px-6 md:px-8 py-3 rounded-lg hover:bg-gray-100 w-full sm:w-auto">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Related Products */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">

        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {relatedProducts.map((item) => (

            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />

          ))}

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

function ProductCard({ product, addToCart }) {

  
  return (
    <div className="rounded mb-3 p-6 bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-2">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.title}
          className="w-[100%] h-[200px] object-contain rounded"
        />

        <h2 className="text-xl font-bold mt-3">
          {product.title}
        </h2>

        <p className="text-lg font-semibold">
          ${product.price.toFixed(2)}
        </p>

      </Link>

      <button onClick={() => addToCart(product)}
      
        className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto  ">
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;
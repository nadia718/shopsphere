import products from "../data/product";
import ProductCard from "./product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function FeaturedProducts() {

    const { addToCart } = useContext(CartContext);

    const featuredProducts = products.slice(0, 4);

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="flex justify-between items-center mb-12">

                    <div>

                        <h2 className="text-4xl font-bold text-gray-900">
                            Featured Products
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Discover our most popular products
                        </p>

                    </div>

                    <Link
                        to="/product"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        View All
                    </Link>

                </div>

                {/* Products */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {featuredProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedProducts;
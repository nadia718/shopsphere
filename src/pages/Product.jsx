import Navbar from "../components/Navbar";
import products from "../data/product";
import ProductCard from "../components/ProductGrid";
import Sidebar from "../components/sidebar";
import FilterBar from "../components/filterbar";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import PageBanner from "../components/pageBanner";
import Footer from "../components/Footer";


function Product() {

    const { cart, addToCart } = useContext(CartContext);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPriceRange, setSelectedPriceRange] = useState(3000);
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [sortOption, setSortOption] = useState("Newest First");

    const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

    const filteredByPrice = filteredProducts.filter((product) => {
        return product.price <= selectedPriceRange

    });
    const filteredByBrand = selectedBrand === "All" ? filteredByPrice : filteredByPrice.filter((product) => product.brand === selectedBrand);

    // Sort products based on the selected sort option
    const sortedProducts = [...filteredByBrand].sort((a, b) => {
        switch (sortOption) {
            case "Price: Low to High":
                return a.price - b.price;
            case "Price: High to Low":
                return b.price - a.price;
            case "Newest First":
                return b.id - a.id;
            default:
                return 0;
        }
    });

    return (
        <>
            <Navbar />
            <PageBanner
                title="Products"
                description="Browse our wide selection of products."
            />

            <h1 className="text-2xl font-bold text-black  w-7xl text-center mx-auto mt-10">Our Products</h1>
            <div className=" gap-20 w-7xl text-center mx-auto mt-5 ">
                <FilterBar sortOption={sortOption} setSortOption={setSortOption}
                    selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                    selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange}
                    selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
            </div>

            <div className="flex gap-6 w-7xl p-5 mx-auto mt-5 mb-10 bg-white">

                {/* Sidebar */}
                <div className="w-[25%]">
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                        maxPrice={selectedPriceRange} setMaxPrice={setSelectedPriceRange}
                        selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
                </div>

                {/* Product Grid */}
                <div className="w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}

                </div>
            </div>

            <Footer />

        </>
    );
}
export default Product;
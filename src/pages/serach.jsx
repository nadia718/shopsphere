import { useState } from "react";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import Footer from "../components/Footer";
function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const products = [
        "iPhone 16 Pro",
        "Samsung Galaxy S25",
        "Google Pixel 10",
        "MacBook Pro M5",
        "Dell XPS 15",
        "HP Spectre x360",
        "iPad Pro",
        "Apple Watch Ultra",
        "Samsung Galaxy Watch",
        "AirPods Pro",
        "Sony WH - 1000XM6",
        "JBL Charge 6",
        "PlayStation 6",
        "Xbox Series X",
        "Nintendo Switch 2",
        "Logitech MX Master 4",
        "Mechanical Keyboard",
        "Gaming Mouse",
        "4K Monitor",
        "Webcam Pro"
    ]

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSearch = () => {
        const results = products.filter(product => product.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };
    return (
        <>
            <Navbar />
            <PageBanner 
                title="Search"
                description="Search products"
            />
            <div className="max-w-4xl mx-auto p-10">

                <h1 className="text-4xl font-bold">
                    Search Products
                </h1>

                <input
                    type="text"
                    placeholder="Search..."
                    className="border p-3 rounded mt-5 w-full"
                    onChange={handleInputChange}
                />
                <button className="bg-blue-500 text-white py-3 px-5 rounded mt-5 hover:bg-blue-600"
                    onClick={handleSearch}>
                    Search
                </button>

                <div className="mt-8">
                    {searchResults.map((product, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded mb-3 bg-white shadow"
                        >
                            {product}
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}
export default Search;